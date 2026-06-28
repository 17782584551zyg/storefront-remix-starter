import fetch from 'node-fetch';

const STOREFRONT_URL = 'http://localhost:3000';

let cookieJar = [];

function getCookieHeader() {
  return cookieJar.map(c => c.split(';')[0]).join('; ');
}

function updateCookies(headers) {
  const setCookie = headers.get('set-cookie');
  if (setCookie) {
    const cookies = setCookie.split(',');
    cookies.forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      const existingIndex = cookieJar.findIndex(c => c.startsWith(name + '='));
      if (existingIndex > -1) {
        cookieJar[existingIndex] = cookie.trim();
      } else {
        cookieJar.push(cookie.trim());
      }
    });
  }
}

async function testCheckoutFlow() {
  console.log('=== Testing Checkout Flow ===\n');
  
  // Step 1: Get initial session
  console.log('Step 1: Getting initial session...');
  const sessionResponse = await fetch(`${STOREFRONT_URL}/api/active-order`);
  updateCookies(sessionResponse.headers);
  console.log(`Initial cookies: ${getCookieHeader().substring(0, 80)}...`);
  console.log('✅ Session obtained');
  
  // Step 2: Add item to cart
  console.log('\nStep 2: Adding item to cart...');
  const addItemResponse = await fetch(`${STOREFRONT_URL}/api/active-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': getCookieHeader()
    },
    body: 'action=addItemToOrder&variantId=1&quantity=1'
  });
  
  const addItemData = await addItemResponse.json();
  updateCookies(addItemResponse.headers);
  
  console.log(`Add item result: activeOrder=${addItemData.activeOrder?.code || 'null'}`);
  
  if (addItemData.activeOrder && addItemData.activeOrder.lines && addItemData.activeOrder.lines.length > 0) {
    console.log('✅ Item added to cart successfully');
    console.log(`Order code: ${addItemData.activeOrder.code}`);
    console.log(`State: ${addItemData.activeOrder.state}`);
  } else {
    console.log('❌ Failed to add item to cart');
    return;
  }
  
  // Step 3: Access checkout page
  console.log('\nStep 3: Accessing checkout page...');
  const checkoutResponse = await fetch(`${STOREFRONT_URL}/checkout`, {
    headers: {
      'Cookie': getCookieHeader()
    },
    redirect: 'manual'
  });
  
  console.log(`Status code: ${checkoutResponse.status}`);
  
  const checkoutHtml = await checkoutResponse.text();
  
  // Check remix context for loader data
  const contextIndex = checkoutHtml.indexOf('__remixContext');
  if (contextIndex > -1) {
    const contextEnd = checkoutHtml.indexOf('</script>', contextIndex);
    const contextJson = checkoutHtml.substring(contextIndex, contextEnd);
    
    const jsonMatch = contextJson.match(/\{.*\}/s);
    if (jsonMatch) {
      const context = JSON.parse(jsonMatch[0]);
      console.log('\n=== Remix Context ===');
      console.log(`URL: ${context.url}`);
      
      // Check all routes loaderData keys
      const loaderDataKeys = Object.keys(context.state.loaderData);
      console.log('\nLoader data keys:');
      loaderDataKeys.forEach(key => {
        const value = context.state.loaderData[key];
        console.log(`  ${key}: ${value === null ? 'null' : typeof value === 'object' ? `{...} (keys: ${Object.keys(value).join(', ')})` : value}`);
      });
      
      // Check checkout._index specifically
      const checkoutIndexData = context.state.loaderData['routes/checkout._index'];
      console.log('\n=== Checkout._index Loader Data ===');
      if (checkoutIndexData === undefined) {
        console.log('❌ routes/checkout._index is undefined - loader was not called!');
      } else if (checkoutIndexData === null) {
        console.log('❌ routes/checkout._index is null - loader returned null!');
      } else {
        console.log('✅ Loader data found:');
        console.log(`  availableCountries: ${checkoutIndexData.availableCountries?.length || 0}`);
        console.log(`  eligibleShippingMethods: ${checkoutIndexData.eligibleShippingMethods?.length || 0}`);
        console.log(`  activeCustomer: ${checkoutIndexData.activeCustomer?.id ? `id=${checkoutIndexData.activeCustomer.id}` : 'null'}`);
      }
    }
  }
  
  // Check for specific elements
  console.log('\n=== Searching for specific elements ===');
  const searchTerms = [
    'Contact information', 
    'Shipping information', 
    'ShippingMethodSelector', 
    'Proceed to payment', 
    'emailAddress', 
    'streetLine1',
    'firstName',
    'lastName',
    'countryCode',
    'postalCode'
  ];
  searchTerms.forEach(term => {
    const found = checkoutHtml.includes(term);
    console.log(`${term}: ${found ? '✅ Found' : '❌ Not found'}`);
  });
  
  // Show page title
  const titleMatch = checkoutHtml.match(/<title>([^<]+)<\/title>/);
  if (titleMatch) {
    console.log(`\nPage title: ${titleMatch[1]}`);
  }
}

testCheckoutFlow().catch(err => {
  console.error('Test failed:', err.message);
  process.exit(1);
});
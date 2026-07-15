const fetch = require('node-fetch');

const FRONTEND_URL = 'https://storefront-remix-starter-production.up.railway.app';

async function testProductPage(slug) {
  const response = await fetch(`${FRONTEND_URL}/products/${slug}`, {
    method: 'GET',
  });

  const text = await response.text();
  
  if (text.includes('Product Details')) {
    console.log('✅ Product Details section is present');
    const start = text.indexOf('Product Details');
    console.log('Context:', text.substring(start - 50, start + 500));
  } else {
    console.log('❌ Product Details section is NOT present');
  }
  
  if (text.includes('detailImage')) {
    console.log('✅ detailImage found in HTML');
  } else {
    console.log('❌ detailImage NOT found in HTML');
  }
  
  if (text.includes('1-26052g40g3l3')) {
    console.log('✅ Image URL found in HTML');
  } else {
    console.log('❌ Image URL NOT found in HTML');
  }
}

testProductPage('99999999999').catch(e => console.error(e));

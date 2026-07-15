const fetch = require('node-fetch');

const SHOP_API_URL = 'https://my-vendure-backend-production.up.railway.app/shop-api';

async function testProducts() {
  const query = `{
    products {
      items {
        id
        name
        slug
        featuredAsset {
          id
          preview
        }
        assets {
          id
          preview
        }
      }
    }
  }`;

  const response = await fetch(SHOP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  console.log('Products:', JSON.stringify(result, null, 2));
}

async function testSearch() {
  const query = `{
    search(input: {}) {
      items {
        productId
        productName
        slug
        productAsset {
          id
          preview
        }
      }
    }
  }`;

  const response = await fetch(SHOP_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  console.log('Search:', JSON.stringify(result, null, 2));
}

testProducts().then(testSearch).catch(e => console.error(e));

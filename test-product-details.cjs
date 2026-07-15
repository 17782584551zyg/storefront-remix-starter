const fetch = require('node-fetch');

const SHOP_API_URL = 'https://my-vendure-backend-production.up.railway.app/shop-api';

async function testAllProducts() {
  const query = `{
    products {
      items {
        id
        name
        slug
        customFields {
          productDetails
          detailImage {
            id
            preview
          }
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
  console.log('All Products:', JSON.stringify(result, null, 2));
}

testAllProducts().catch(e => console.error(e));

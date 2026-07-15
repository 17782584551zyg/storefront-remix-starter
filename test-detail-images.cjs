const fetch = require('node-fetch');

const SHOP_API_URL = 'https://my-vendure-backend-production.up.railway.app/shop-api';

async function testDetailImages() {
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
            name
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
  console.log('Products with detail images:', JSON.stringify(result, null, 2));
}

testDetailImages().catch(e => console.error(e));

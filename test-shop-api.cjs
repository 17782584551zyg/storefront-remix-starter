const fetch = require('node-fetch');

const SHOP_API_URL = 'http://localhost:3002/shop-api';

async function test() {
  const query = `{
    activeChannel {
      id
      currencyCode
      customFields {
        bannerImages {
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
  console.log('Raw response:', JSON.stringify(result, null, 2));
}

test().catch(e => console.error(e));

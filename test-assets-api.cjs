const fetch = require('node-fetch');

const SHOP_API_URL = 'https://my-vendure-backend-production.up.railway.app/shop-api';

async function testAssets() {
  const query = `{
    product(slug: "99999999999") {
      id
      name
      featuredAsset {
        id
        preview
        name
        width
        height
      }
      assets {
        id
        preview
        name
        width
        height
      }
      customFields {
        detailImage {
          id
          preview
          name
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
  console.log('Product with assets:', JSON.stringify(result, null, 2));
}

testAssets().catch(e => console.error(e));

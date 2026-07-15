const fetch = require('node-fetch');

const BACKEND_URL = 'https://my-vendure-backend-production.up.railway.app';

async function testStaticAssets() {
  const urls = [
    `${BACKEND_URL}/assets/preview/45/1-26052g40i1v0__preview.png`,
    `${BACKEND_URL}/assets/preview/99/1-26052g40g3l3__02__preview.png`,
    `${BACKEND_URL}/admin-ui/dist/index.html`,
    `${BACKEND_URL}/shop-api`,
  ];
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      const text = await response.text();
      console.log(`URL: ${url}`);
      console.log(`Status: ${response.status}`);
      console.log(`Content-Type: ${response.headers.get('content-type')}`);
      console.log(`Content-Length: ${response.headers.get('content-length')}`);
      if (response.status === 404) {
        console.log(`Response body: ${text.substring(0, 200)}`);
      }
      console.log('---');
    } catch (e) {
      console.log(`URL: ${url}`);
      console.log(`Error: ${e.message}`);
      console.log('---');
    }
  }
}

testStaticAssets().catch(e => console.error(e));

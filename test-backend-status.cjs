const fetch = require('node-fetch');

const BACKEND_URL = 'https://my-vendure-backend-production.up.railway.app';

async function testBackend() {
  const urls = [
    BACKEND_URL,
    `${BACKEND_URL}/admin`,
    `${BACKEND_URL}/shop-api`,
  ];
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      console.log(`URL: ${url}`);
      console.log(`Status: ${response.status}`);
      console.log(`Content-Type: ${response.headers.get('content-type')}`);
      console.log('---');
    } catch (e) {
      console.log(`URL: ${url}`);
      console.log(`Error: ${e.message}`);
      console.log('---');
    }
  }
}

testBackend().catch(e => console.error(e));

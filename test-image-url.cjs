const fetch = require('node-fetch');

async function testImageUrl() {
  const urls = [
    'https://my-vendure-backend-production.up.railway.app/assets/preview/c1/c7ff97c40b3cd8449d334e522b52179c__preview.jpg',
    'https://my-vendure-backend-production.up.railway.app/assets/preview/c1/c7ff97c40b3cd8449d334e522b52179c__preview.jpg?preset=full',
    'https://my-vendure-backend-production.up.railway.app/assets/',
    'https://my-vendure-backend-production.up.railway.app/assets/preview/',
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

testImageUrl().catch(e => console.error(e));

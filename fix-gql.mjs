import fs from 'fs';
const path = 'app/providers/products/products.ts';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/    customFields \{[\s\S]*?\}/g, '    customFields');

fs.writeFileSync(path, c, 'utf8');
console.log('GraphQL query updated');
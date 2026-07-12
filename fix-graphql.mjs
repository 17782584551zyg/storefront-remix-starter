import fs from 'fs';
const path = 'app/providers/products/products.ts';
let c = fs.readFileSync(path, 'utf8');

const oldCustomFields = `    customFields {
      weight
      specifications
      usage
      detailImage {
        id
        preview
      }
    }`;

const newCustomFields = `    customFields {
      productDetails
      detailImage {
        id
        preview
      }
    }`;

c = c.replace(oldCustomFields, newCustomFields);
fs.writeFileSync(path, c, 'utf8');
console.log('GraphQL query updated');
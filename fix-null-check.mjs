import fs from 'fs';
const path = 'app/routes/products.$slug.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  /const detailsHtml = typeof details === 'object' \? Object\.values\(details\)\[0\] : details;/g,
  'const detailsHtml = details && typeof details === "object" && !Array.isArray(details) ? Object.values(details)[0] : details;'
);

c = c.replace(
  /typeof product\.customFields\.specifications === "object" \? Object\.values\(product\.customFields\.specifications\)\[0\] : product\.customFields\.specifications/g,
  '(product.customFields.specifications && typeof product.customFields.specifications === "object" && !Array.isArray(product.customFields.specifications)) ? Object.values(product.customFields.specifications)[0] : product.customFields.specifications'
);

c = c.replace(
  /typeof product\.customFields\.usage === "object" \? Object\.values\(product\.customFields\.usage\)\[0\] : product\.customFields\.usage/g,
  '(product.customFields.usage && typeof product.customFields.usage === "object" && !Array.isArray(product.customFields.usage)) ? Object.values(product.customFields.usage)[0] : product.customFields.usage'
);

fs.writeFileSync(path, c, 'utf8');
console.log('done');
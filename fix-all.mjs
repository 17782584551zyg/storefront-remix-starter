import fs from 'fs';
const path = 'app/routes/products.$slug.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  /\{product\.customFields\.productDetails;/g,
  '{product.customFields.weight || product.customFields.specifications || product.customFields.usage;'
);

c = c.replace(
  /product\.customFields\?\.productDetails/g,
  'product.customFields?.weight || product.customFields?.specifications || product.customFields?.usage'
);

c = c.replace(
  /<div className="text-gray-600 prose prose-sm max-w-none" dangerouslySetInnerHTML=\{\{ __html: detailsHtml \}\} \/>/,
  '<div className="space-y-4">' +
  '{product.customFields?.weight && (<div><h4 className="text-sm font-semibold text-gray-700 mb-2">Weight</h4><p className="text-gray-600">{product.customFields.weight}</p></div>)}' +
  '{product.customFields?.specifications && (<div><h4 className="text-sm font-semibold text-gray-700 mb-2">Specifications</h4><div className="text-gray-600 prose prose-sm" dangerouslySetInnerHTML={{ __html: typeof product.customFields.specifications === "object" ? Object.values(product.customFields.specifications)[0] : product.customFields.specifications }} /></div>)}' +
  '{product.customFields?.usage && (<div><h4 className="text-sm font-semibold text-gray-700 mb-2">Usage Instructions</h4><div className="text-gray-600 prose prose-sm" dangerouslySetInnerHTML={{ __html: typeof product.customFields.usage === "object" ? Object.values(product.customFields.usage)[0] : product.customFields.usage }} /></div>)}' +
  '</div>'
);

fs.writeFileSync(path, c, 'utf8');
console.log('done');
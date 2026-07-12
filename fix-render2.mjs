import fs from 'fs';
const path = 'app/routes/products.$slug.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/product\.customFields\?.weight \|\| product\.customFields\?.specifications \|\| product\.customFields\?.usage/g, 'product.customFields?.productDetails');

c = c.replace(/<div className="space-y-4">.*?<\/div>/s, '<div className="text-gray-600 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: detailsHtml }} />');

c = c.replace(/<h4 className="text-lg font-semibold text-gray-800 mb-4">Detail Image<\/h4>/g, '');
c = c.replace(/<section className="bg-gray-50 rounded-xl p-6 md:p-8">/g, '<div>');
c = c.replace(/<\/section>/g, '</div>');
c = c.replace(/className="max-w-full rounded-lg shadow-md"/g, 'className="w-full h-auto"');
c = c.replace(/\{ w: 800 \}/g, '{ w: 1200 }');

fs.writeFileSync(path, c, 'utf8');
console.log('Render logic updated');
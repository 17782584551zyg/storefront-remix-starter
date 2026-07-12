import fs from 'fs';
const path = 'app/routes/products.$slug.tsx';
let c = fs.readFileSync(path, 'utf8');

const startIndex = c.indexOf('{(() => {');
const endIndex = c.indexOf('})()}');

if (startIndex !== -1 && endIndex !== -1) {
  const before = c.substring(0, startIndex);
  const after = c.substring(endIndex + 6);
  
  const newSection = `{(() => {
          const details = product.customFields?.productDetails;
          const detailsHtml = details && typeof details === "object" && !Array.isArray(details) ? Object.values(details)[0] : details;
          return detailsHtml ? (
            <div className="mt-12 pb-12">
              <section className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Product Details</h3>
                <div className="text-gray-600 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: detailsHtml }} />
              </section>
            </div>
          ) : null;
        })()}`;
  
  c = before + newSection + after;
  fs.writeFileSync(path, c, 'utf8');
  console.log('Fixed product details section');
} else {
  console.log('Could not find section to replace');
}
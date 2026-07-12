import fs from 'fs';
const path = 'app/routes/products.$slug.tsx';
let c = fs.readFileSync(path, 'utf8');

const oldSection = `        {product.customFields?.productDetails && (
          <div className="mt-12 pb-12">
            <section className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Product Details</h3>
              <div className="text-gray-600 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: product.customFields.productDetails }} />
            </section>
          </div>
        )}`;

const newSection = `        {(() => {
          const details = product.customFields?.productDetails;
          const detailsHtml = typeof details === 'object' ? Object.values(details)[0] : details;
          return detailsHtml ? (
            <div className="mt-12 pb-12">
              <section className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Product Details</h3>
                <div className="text-gray-600 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: detailsHtml }} />
              </section>
            </div>
          ) : null;
        })()}`;

c = c.replace(oldSection, newSection);
fs.writeFileSync(path, c, 'utf8');
console.log('done');
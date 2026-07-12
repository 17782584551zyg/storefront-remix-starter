import fs from 'fs';
let c = fs.readFileSync('app/providers/products/products.ts', 'utf8');
c = c.replace('    customFields', '    customFields {\n      weight\n      specifications\n      usage\n      detailImage {\n        id\n        preview\n      }\n    }');
fs.writeFileSync('app/providers/products/products.ts', c, 'utf8');
console.log('products.ts updated');

c = fs.readFileSync('app/routes/products.$slug.tsx', 'utf8');

const oldSection = `        {(() => {
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
        })()}
        {product.customFields?.detailImage && (`;

const newSection = `        {product.customFields && (
          <div className="mt-12 pb-12">
            <section className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Product Details</h3>
              {product.customFields.weight && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Weight</h4>
                  <p className="text-gray-600">{product.customFields.weight}</p>
                </div>
              )}
              {product.customFields.specifications && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specifications</h4>
                  <div className="text-gray-600 prose prose-sm" dangerouslySetInnerHTML={{ __html: typeof product.customFields.specifications === 'object' ? Object.values(product.customFields.specifications)[0] : product.customFields.specifications }} />
                </div>
              )}
              {product.customFields.usage && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Usage Instructions</h4>
                  <div className="text-gray-600 prose prose-sm" dangerouslySetInnerHTML={{ __html: typeof product.customFields.usage === 'object' ? Object.values(product.customFields.usage)[0] : product.customFields.usage }} />
                </div>
              )}
            </section>
          </div>
        )}
        {product.customFields?.detailImage?.preview && (`;

c = c.replace(oldSection, newSection);
fs.writeFileSync('app/routes/products.$slug.tsx', c, 'utf8');
console.log('products.$slug.tsx updated');
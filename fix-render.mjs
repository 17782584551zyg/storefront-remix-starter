import fs from 'fs';
const path = 'app/routes/products.$slug.tsx';
let c = fs.readFileSync(path, 'utf8');

const oldProductDetails = `        {(() => {
          const details = product.customFields?.weight || product.customFields?.specifications || product.customFields?.usage;
          const detailsHtml = details && typeof details === "object" && !Array.isArray(details) ? Object.values(details)[0] : details;
          return detailsHtml ? (
            <div className="mt-12 pb-12">
              <section className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Product Details</h3>
                <div className="space-y-4">{product.customFields?.weight && (<div><h4 className="text-sm font-semibold text-gray-700 mb-2">Weight</h4><p className="text-gray-600">{product.customFields.weight}</p></div>)}{product.customFields?.specifications && (<div><h4 className="text-sm font-semibold text-gray-700 mb-2">Specifications</h4><div className="text-gray-600 prose prose-sm" dangerouslySetInnerHTML={{ __html: (product.customFields.specifications && typeof product.customFields.specifications === "object" && !Array.isArray(product.customFields.specifications)) ? Object.values(product.customFields.specifications)[0] : product.customFields.specifications }} /></div>)}{product.customFields?.usage && (<div><h4 className="text-sm font-semibold text-gray-700 mb-2">Usage Instructions</h4><div className="text-gray-600 prose prose-sm" dangerouslySetInnerHTML={{ __html: (product.customFields.usage && typeof product.customFields.usage === "object" && !Array.isArray(product.customFields.usage)) ? Object.values(product.customFields.usage)[0] : product.customFields.usage }} /></div>)}</div>
              </section>
            </div>
          ) : null;
        })()}`;

const newProductDetails = `        {(() => {
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

c = c.replace(oldProductDetails, newProductDetails);

const oldDetailImage = `        {product.customFields?.detailImage?.preview && (
          <div className="mt-6 pb-12">
            <section className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Detail Image</h4>
              <img
                src={getImageUrl(product.customFields.detailImage.preview, { w: 800 })}
                alt="Product Detail"
                className="max-w-full rounded-lg shadow-md"
              />
            </section>
          </div>
        )}`;

const newDetailImage = `        {product.customFields?.detailImage?.preview && (
          <div className="mt-6 pb-12">
            <img
              src={getImageUrl(product.customFields.detailImage.preview, { w: 1200 })}
              alt="Product Detail"
              className="w-full h-auto"
            />
          </div>
        )}`;

c = c.replace(oldDetailImage, newDetailImage);

fs.writeFileSync(path, c, 'utf8');
console.log('Render logic updated');
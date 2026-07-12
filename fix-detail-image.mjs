import fs from 'fs';
const path = 'app/routes/products.$slug.tsx';
let c = fs.readFileSync(path, 'utf8');

const oldDetailImage = `        {product.customFields?.detailImage && (
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

c = c.replace(oldDetailImage, newDetailImage);
fs.writeFileSync(path, c, 'utf8');
console.log('done');
import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { getImageUrl } from '~/constants';
import { search } from '~/providers/products/products';

export const loader: LoaderFunction = async ({ request }) => {
  const collections = await getCollections(request);
  const searchResult = await search({ input: { take: 20 } }, { request });
  const products = searchResult.search.items;
  return json({ collections, products });
};

export default function ProductsPage() {
  const { collections, products } = useLoaderData<{
    collections: Array<{
      id: string;
      name: string;
      slug: string;
      featuredAsset?: { preview: string };
    }>;
    products: Array<{
      productId: string;
      productName: string;
      slug: string;
      productAsset?: { preview: string };
      priceWithTax?: { min?: number; max?: number; value?: number };
    }>;
  }>();

  const getPrice = (priceWithTax) => {
    if (!priceWithTax) return '';
    if ('value' in priceWithTax) return priceWithTax.value;
    if ('min' in priceWithTax) return priceWithTax.min;
    return '';
  };

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-gray-600">
              Browse through our product categories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {collections.map((category) => (
              <Link
                key={category.id}
                to={`/collections/${category.slug}`}
                className="flex flex-col bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-orange-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                </div>
                <div className="flex-1 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  {category.featuredAsset?.preview ? (
                    <img
                      src={getImageUrl(category.featuredAsset.preview, {
                        w: 400,
                        h: 400,
                      })}
                      alt={category.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                    />
                  ) : (
                    <svg
                      className="w-24 h-24 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Browse through our featured products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.productId}
                to={`/products/${product.slug}`}
                className="flex flex-col bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-orange-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex-1 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  {product.productAsset?.preview ? (
                    <img
                      src={getImageUrl(product.productAsset.preview, {
                        w: 400,
                        h: 400,
                      })}
                      alt={product.productName}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                    />
                  ) : (
                    <svg
                      className="w-24 h-24 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                    {product.productName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ${getPrice(product.priceWithTax)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

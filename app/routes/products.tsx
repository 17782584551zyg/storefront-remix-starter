import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, Link, useOutletContext } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { getImageUrl } from '~/constants';

export const loader: LoaderFunction = async ({ request }) => {
  const collections = await getCollections(request);
  return json({ collections });
};

export default function ProductsPage() {
  const { collections } = useLoaderData<{
    collections: Array<{
      id: string;
      name: string;
      slug: string;
      featuredAsset?: { preview: string };
    }>;
  }>();
  const { backendUrl } = useOutletContext<{ backendUrl: string }>();

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
    </div>
  );
}

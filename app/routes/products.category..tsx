import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { sdk } from "~/graphqlWrapper";
import gql from "graphql-tag";
import { BACKEND_URL } from "~/constants";

export const loader: LoaderFunction = async ({ params, request }) => {
  const { slug } = params;
  const [collectionResult, productsResult] = await Promise.all([
    sdk.collection({ slug }, { request }),
    sdk.search({ input: { collectionSlug: slug, take: 24 } }, { request }),
  ]);
  return json({
    collection: collectionResult.collection,
    products: productsResult.search?.items || [],
    totalItems: productsResult.search?.totalItems || 0,
  });
};

gql`
  query collection($slug: String, $id: ID) {
    collection(slug: $slug, id: $id) {
      id name slug description
      featuredAsset { id preview }
      breadcrumbs { id name slug }
      children { id name slug featuredAsset { id preview } }
    }
  }
`;

export default function CategoryDetailPage() {
  const { collection, products, totalItems } = useLoaderData();
  if (!collection) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-600">Category not found</p></div>;
  }
  const formatPrice = (price, currencyCode) => {
    if ("value" in price) return `${currencyCode} ${price.value}`;
    if (price.min && price.max) return `${currencyCode} ${price.min} - ${currencyCode} ${price.max}`;
    return "";
  };
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-amber-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                {collection.breadcrumbs?.map((crumb) => (<span key={crumb.id}><Link to={`/products/category/${crumb.slug}`} className="hover:text-orange-500 transition-colors">{crumb.name}</Link><span className="mx-2">/</span></span>))}
                <span className="text-gray-900 font-medium">{collection.name}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{collection.name}</h1>
              {collection.description && <p className="text-gray-600 text-lg">{collection.description}</p>}
            </div>
            {collection.featuredAsset && (<div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg"><img src={BACKEND_URL + collection.featuredAsset.preview} alt={collection.name} className="w-full h-full object-cover" /></div>)}
          </div>
        </div>
      </section>
      {collection.children && collection.children.length > 0 && (<section className="py-12 bg-gray-50"><div className="max-w-6xl mx-auto px-6"><h2 className="text-xl font-semibold text-gray-900 mb-6">Subcategories</h2><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{collection.children.map((child) => (<Link key={child.id} to={`/products/category/${child.slug}`} className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300"><div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">{child.featuredAsset ? (<img src={BACKEND_URL + child.featuredAsset.preview} alt={child.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />) : (<div className="w-full h-full flex items-center justify-center text-gray-400"><svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div>)}</div><h3 className="text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors">{child.name}</h3></Link>))}</div></div></section>)}
      <section className="py-16 bg-white"><div className="max-w-6xl mx-auto px-6"><div className="flex items-center justify-between mb-8"><h2 className="text-2xl font-bold text-gray-900">Products ({totalItems})</h2></div>
        {products.length > 0 ? (<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">{products.map((product) => (<Link key={product.productId} to={`/products/${product.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"><div className="w-full aspect-square bg-gray-50 overflow-hidden">{product.productAsset ? (<img src={BACKEND_URL + product.productAsset.preview + "?w=400"} alt={product.productName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />) : (<div className="w-full h-full flex items-center justify-center bg-gray-100"><svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>)}</div><div className="p-4"><h3 className="text-sm font-medium text-gray-900 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">{product.productName}</h3><p className="text-lg font-semibold text-orange-500">{formatPrice(product.priceWithTax, product.currencyCode)}</p></div></Link>))}</div>) : (<div className="text-center py-16"><svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg><h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3><p className="text-gray-500">There are no products in this category yet.</p></div>)}
      </section>
    </div>
  );
}


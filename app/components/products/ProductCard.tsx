import { SearchQuery } from '~/generated/graphql';
import { Link } from '@remix-run/react';
import { getImageUrl } from '~/constants';

export type ProductCardProps = SearchQuery['search']['items'][number];
export function ProductCard({
  productAsset,
  productName,
  slug,
}: ProductCardProps) {
  return (
    <Link
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      prefetch="intent"
      to={`/products/${slug}`}
    >
      <div className="flex-1 w-full h-auto p-6 overflow-hidden">
        <img
          className="w-full h-full object-contain"
          alt={productName}
          src={getImageUrl(productAsset?.preview, { w: 400, h: 300 })}
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-800 mb-2">
          {productName}
        </h3>

        <button className="w-full py-2 px-4 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300">
          View details
        </button>
      </div>
    </Link>
  );
}

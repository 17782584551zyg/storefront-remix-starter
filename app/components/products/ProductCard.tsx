import { SearchQuery } from '~/generated/graphql';
import { Link } from '@remix-run/react';
import { getImageUrl } from '~/constants';
import { useState } from 'react';

export type ProductCardProps = SearchQuery['search']['items'][number];
export function ProductCard({
  productAsset,
  productName,
  slug,
}: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      prefetch="intent"
      to={`/products/${slug}`}
    >
      <div className="flex-1 w-full h-auto p-6 overflow-hidden bg-gray-50 relative">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
        )}
        <img
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          alt={productName}
          src={getImageUrl(productAsset?.preview, { w: 400, h: 300 })}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageLoaded(true);
            setImageError(true);
          }}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <span className="text-gray-400 text-sm">Image not available</span>
          </div>
        )}
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

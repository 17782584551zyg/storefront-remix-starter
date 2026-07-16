import { SearchQuery } from '~/generated/graphql';
import { Link } from '@remix-run/react';
import { getImageUrl } from '~/constants';

export type ProductCardProps = SearchQuery['search']['items'][number] & {
  backendUrl?: string;
};
export function ProductCard({
  productAsset,
  productName,
  slug,
  backendUrl,
}: ProductCardProps) {
  return (
    <Link
      className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
      prefetch="intent"
      to={`/products/${slug}`}
    >
      <img
        className="flex-grow object-cover aspect-[7/8]"
        alt=""
        src={getImageUrl(productAsset?.preview, { w: 300, h: 400, backendUrl })}
      />
      <div className="p-3">
        <div className="text-sm text-gray-700">{productName}</div>
      </div>
    </Link>
  );
}

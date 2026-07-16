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
        <p className="text-xs text-gray-500 mb-4 line-clamp-3">
          概述:标准通用：遵循 DIN6923 标准，可直接替换普通六角螺母
          防护性强：圆顶封闭设计，防尘防水防磕碰，保护螺牙
        </p>
        <button className="w-full py-2 px-4 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors duration-300">
          查看详情
        </button>
      </div>
    </Link>
  );
}

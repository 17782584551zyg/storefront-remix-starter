import { Link } from '@remix-run/react';
import { CollectionsQuery } from '~/generated/graphql';
import { getImageUrl } from '~/constants';

export function CollectionCard({
  collection,
}: {
  collection: CollectionsQuery['collections']['items'][number];
}) {
  return (
    <Link
      to={'/collections/' + collection.slug}
      prefetch="intent"
      key={collection.id}
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {collection.name}
        </h3>
        <p className="text-xs text-gray-500">LOREM IPSUMLOREM IPSUM</p>
      </div>
      <div className="flex-1 w-full h-auto overflow-hidden">
        <img
          src={getImageUrl(collection.featuredAsset?.preview, {
            w: 400,
            h: 300,
          })}
          alt={collection.name}
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
}

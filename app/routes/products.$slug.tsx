import { DataFunctionArgs, json } from '@remix-run/server-runtime';
import { useState } from 'react';
import { Price } from '~/components/products/Price';
import { ProductImageZoom } from '~/components/products/ProductImageZoom';
import { getProductBySlug } from '~/providers/products/products';
import {
  FetcherWithComponents,
  ShouldRevalidateFunction,
  useLoaderData,
  useOutletContext,
  MetaFunction,
} from '@remix-run/react';
import { CheckIcon, HeartIcon, PhotoIcon } from '@heroicons/react/24/solid';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import { APP_META_TITLE, getImageUrl } from '~/constants';
import { CartLoaderData } from '~/routes/api.active-order';
import { getSessionStorage } from '~/sessions';
import { ErrorCode, ErrorResult } from '~/generated/graphql';
import Alert from '~/components/Alert';

import TopReviews from '~/components/products/TopReviews';
import { ScrollableContainer } from '~/components/products/ScrollableContainer';
import { useTranslation } from '~/hooks/useTranslation';

export const meta: MetaFunction = ({ data }) => {
  return [
    {
      title: data?.product?.name
        ? `${data.product.name} - ${APP_META_TITLE}`
        : APP_META_TITLE,
    },
  ];
};

export async function loader({ params, request }: DataFunctionArgs) {
  const { product } = await getProductBySlug(params.slug!, { request });
  if (!product) {
    throw new Response('Not Found', {
      status: 404,
    });
  }
  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(
    request?.headers.get('Cookie'),
  );
  const error = session.get('activeOrderError');
  return json(
    { product: product!, error },
    {
      headers: {
        'Set-Cookie': await sessionStorage.commitSession(session),
      },
    },
  );
}

export const shouldRevalidate: ShouldRevalidateFunction = () => true;

export default function ProductSlug() {
  const { product, error } = useLoaderData<typeof loader>();
  const { activeOrderFetcher } = useOutletContext<{
    activeOrderFetcher: FetcherWithComponents<CartLoaderData>;
  }>();
  const { activeOrder } = activeOrderFetcher.data ?? {};
  const addItemToOrderError = getAddItemToOrderError(error);
  const { t } = useTranslation();

  if (!product) {
    return <div>{t('product.notFound')}</div>;
  }

  const findVariantById = (id: string) =>
    product.variants.find((v) => v.id === id);

  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0].id,
  );
  const selectedVariant = findVariantById(selectedVariantId);
  if (!selectedVariant) {
    setSelectedVariantId(product.variants[0].id);
  }

  const qtyInCart =
    activeOrder?.lines.find((l) => l.productVariant.id === selectedVariantId)
      ?.quantity ?? 0;

  const asset = product.assets[0];
  const brandName = product.facetValues.find(
    (fv) => fv.facet.code === 'brand',
  )?.name;

  const getDefaultFeaturedAsset = (variantId?: string): AssetType | null => {
    const variant = variantId ? findVariantById(variantId) : selectedVariant;
    if (variant?.featuredAsset) return variant.featuredAsset;
    if (product.featuredAsset) return product.featuredAsset;
    if (product.assets.length > 0) return product.assets[0];
    return null;
  };

  type AssetType = { id: string; preview: string };
  const [featuredAsset, setFeaturedAsset] = useState<AssetType | null>(
    getDefaultFeaturedAsset(),
  );

  const getLocaleText = (value) =>
    typeof value === 'object' ? Object.values(value)[0] : value;

  const rewriteImageUrls = (html: string): string => {
    const backendUrl = 'https://my-vendure-backend-production.up.railway.app';
    return html.replace(/src="\/assets\//g, `src="${backendUrl}/assets/`);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
          {product.name}
        </h2>
        <Breadcrumbs
          items={
            product.collections[product.collections.length - 1]?.breadcrumbs ??
            []
          }
        ></Breadcrumbs>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12">
          <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <span className="rounded-md overflow-hidden">
              <div className="w-full h-full object-center object-cover rounded-lg">
                <img
                  src={getImageUrl(
                    featuredAsset?.preview ??
                      product.assets[0]?.preview ??
                      product.featuredAsset?.preview,
                    { w: 1200 },
                  )}
                  alt={product.name}
                  className="w-full h-full object-center object-cover rounded-lg"
                />
              </div>
            </span>

            {product.assets.length > 0 && (
              <ScrollableContainer>
                {product.assets.map((asset) => (
                  <button
                    key={asset.id}
                    className={`basis-1/3 md:basis-1/4 flex-shrink-0 select-none touch-pan-x rounded-lg p-1 ${
                      featuredAsset?.id === asset.id
                        ? 'outline outline-2 outline-primary outline-offset-[-2px] bg-primary/5'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setFeaturedAsset(asset);
                    }}
                  >
                    <img
                      draggable="false"
                      className="rounded-lg select-none h-24 w-full object-cover"
                      src={getImageUrl(asset.preview, { preset: 'full' })}
                      alt={`${product.name} thumbnail ${
                        product.assets.indexOf(asset) + 1
                      }`}
                    />
                  </button>
                ))}
              </ScrollableContainer>
            )}
          </div>

          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="">
              <h3 className="sr-only">{t('product.description')}</h3>

              <div
                className="prose prose-lg text-gray-700 max-w-none"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              />
            </div>
            <div>
              {1 < product.variants.length && (
                <div className="mt-4">
                  <label
                    htmlFor="option"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t('product.selectOption')}
                  </label>
                  <select
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    id="productVariant"
                    value={selectedVariantId}
                    onChange={(e) => {
                      setSelectedVariantId(e.target.value);
                      setFeaturedAsset(getDefaultFeaturedAsset(e.target.value));
                    }}
                  >
                    {product.variants.map((variant) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="mt-2 flex items-center space-x-2">
                <span className="text-gray-500">{selectedVariant?.sku}</span>
              </div>
            </div>
          </div>
        </div>

        {(() => {
          const details = product.customFields?.productDetails;
          const detailsHtml = getLocaleText(details);
          const detailImages = product.customFields?.detailImage || [];
          const hasContent = detailsHtml || detailImages.length > 0;
          return hasContent ? (
            <div className="mt-12 pb-12">
              <section className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Product Details
                </h3>
                {detailsHtml && (
                  <div
                    className="text-gray-600 prose prose-sm max-w-none mb-8"
                    dangerouslySetInnerHTML={{ __html: rewriteImageUrls(detailsHtml) }}
                  />
                )}
                {detailImages.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {detailImages.map((image, index) => (
                      <img
                        key={image.id}
                        src={getImageUrl(image.preview, { w: 800 })}
                        alt={`Product Detail ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </section>
            </div>
          ) : null;
        })()}
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
        {t('product.notFound')}
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12">
        <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <span className="rounded-md overflow-hidden">
            <div className="w-full h-96 bg-slate-200 rounded-lg flex content-center justify-center">
              <PhotoIcon className="w-48 text-white"></PhotoIcon>
            </div>
          </span>
        </div>

        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <div className="">{t('product.notFoundInfo')}</div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getAddItemToOrderError(error?: ErrorResult): string | undefined {
  if (!error || !error.errorCode) {
    return undefined;
  }
  switch (error.errorCode) {
    case ErrorCode.OrderModificationError:
    case ErrorCode.OrderLimitError:
    case ErrorCode.NegativeQuantityError:
    case ErrorCode.InsufficientStockError:
      return error.message;
  }
}

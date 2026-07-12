import { DataFunctionArgs, json } from '@remix-run/server-runtime';
import { useState } from 'react';
import { Price } from '~/components/products/Price';
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
import { useTranslation } from 'react-i18next';

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

  const [featuredAsset, setFeaturedAsset] = useState(
    selectedVariant?.featuredAsset || product.featuredAsset,
  );

  const [isFavorite, setIsFavorite] = useState(false);

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
          {/* Image gallery */}
          <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
            <span className="rounded-md overflow-hidden">
              <div className="w-full h-full object-center object-cover rounded-lg">
                <img
                  src={getImageUrl(featuredAsset?.preview || product.featuredAsset?.preview, { w: 800 })}
                  alt={product.name}
                  className="w-full h-full object-center object-cover rounded-lg"
                />
              </div>
            </span>

            {product.assets.length > 1 && (
              <ScrollableContainer>
                {product.assets.map((asset) => (
                  <div
                    className={`basis-1/3 md:basis-1/4 flex-shrink-0 select-none touch-pan-x rounded-lg ${
                      featuredAsset?.id == asset.id
                        ? 'outline outline-2 outline-primary outline-offset-[-2px]'
                        : ''
                    }`}
                    onClick={() => {
                      setFeaturedAsset(asset);
                    }}
                  >
                    <img
                      draggable="false"
                      className="rounded-lg select-none h-24 w-full object-cover"
                      src={getImageUrl(asset.preview, { preset: 'full' })}
                    />
                  </div>
                ))}
              </ScrollableContainer>
            )}
          </div>

          {/* Product info */}
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

                      const variant = findVariantById(e.target.value);
                      if (variant) {
                        setFeaturedAsset(variant!.featuredAsset);
                      }
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

              {product.customFields && (
                <section className="mt-12 pt-12 border-t">
                  <h3 className="text-gray-600 font-bold mb-4">Product Details</h3>
                  {Object.entries(product.customFields).map(([key, value]) => {
                    if (key === 'detailImage') return null;
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    return (
                      <div key={key} className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-1">{label}</h4>
                        {typeof value === 'object' && value?.preview ? (
                          <img
                            src={getImageUrl(value.preview, { w: 600 })}
                            alt={label}
                            className="max-w-full rounded-lg"
                          />
                        ) : typeof value === 'string' && value.includes('<') ? (
                          <div
                            className="text-gray-600 prose prose-sm"
                            dangerouslySetInnerHTML={{
                              __html: value,
                            }}
                          />
                        ) : (
                          <p className="text-gray-600">{value}</p>
                        )}
                      </div>
                    );
                  })}
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
      {product.customFields && product.customFields.detailImage && (
        <div className="max-w-6xl mx-auto px-4 mt-12 pb-12">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Detail Image</h4>
          <img
            src={getImageUrl(product.customFields.detailImage.preview, { w: 600 })}
            alt="Product Detail"
            className="max-w-full rounded-lg"
          />
        </div>
      )}
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
        {/* Image gallery */}
        <div className="w-full max-w-2xl mx-auto sm:block lg:max-w-none">
          <span className="rounded-md overflow-hidden">
            <div className="w-full h-96 bg-slate-200 rounded-lg flex content-center justify-center">
              <PhotoIcon className="w-48 text-white"></PhotoIcon>
            </div>
          </span>
        </div>

        {/* Product info */}
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

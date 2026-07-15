import { search, searchFacetValues } from '~/providers/products/products';
import { redirect } from '@remix-run/server-runtime';

import { paginationValidationSchema } from '~/utils/pagination';
import { LoaderFunctionArgs } from '@remix-run/router';

/**
 * This loader deals with loading product searches, which is used in both the search page and the
 * category list page.
 */
export function filteredSearchLoaderFromPagination(
  allowedPaginationLimits: Set<number>,
  paginationLimitMinimumDefault: number,
) {
  const searchPaginationSchema = paginationValidationSchema(
    allowedPaginationLimits,
  );

  return {
    validator: searchPaginationSchema,
    filteredSearchLoader: async ({ params, request }: LoaderFunctionArgs) => {
      const url = new URL(request.url);
      const term = url.searchParams.get('q');
      const facetValueIds = url.searchParams.getAll('fvid');
      const limit =
        url.searchParams.get('limit') ?? paginationLimitMinimumDefault;
      const page = url.searchParams.get('page') ?? 1;

      const zodResult = searchPaginationSchema.safeParse({ limit, page });
      if (!zodResult.success) {
        url.search = '';
        throw redirect(url.href);
      }

      let resultPromises: [
        ReturnType<typeof search>,
        ReturnType<typeof searchFacetValues>,
      ];
      const searchInput = {
        groupByProduct: true,
        term,
        facetValueFilters: [{ or: facetValueIds }],
        take: zodResult.data.limit,
        skip: (zodResult.data.page - 1) * zodResult.data.limit,
      };
      if (params.slug) {
        searchInput.collectionSlug = params.slug;
      }

      const searchResultPromise = search({ input: searchInput }, { request });
      if (facetValueIds.length) {
        const facetSearchInput = {
          groupByProduct: true,
          term,
        };
        if (params.slug) {
          facetSearchInput.collectionSlug = params.slug;
        }
        resultPromises = [
          searchResultPromise,
          searchFacetValues({ input: facetSearchInput }, { request }),
        ];
      } else {
        resultPromises = [searchResultPromise, searchResultPromise];
      }
      const [result, resultWithoutFacetValueFilters] = await Promise.all(
        resultPromises,
      );
      return {
        term,
        facetValueIds,
        result: result.search,
        resultWithoutFacetValueFilters: resultWithoutFacetValueFilters.search,
        appliedPaginationLimit: zodResult.data.limit,
        appliedPaginationPage: zodResult.data.page,
      };
    },
  };
}

import{a}from"/build/_shared/chunk-6MW4WS3D.js";import{b as e}from"/build/_shared/chunk-ZXVIEAYD.js";function n(t,r){return a.search(t,r)}function o(t,r){return a.searchFacetValues(t,r)}var d=e`
  fragment DetailedProduct on Product {
    id
    name
    description
    collections {
      id
      slug
      name
      breadcrumbs {
        id
        name
        slug
      }
    }
    facetValues {
      facet {
        id
        code
        name
      }
      id
      code
      name
    }
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    variants {
      id
      name
      priceWithTax
      currencyCode
      sku
      stockLevel
      featuredAsset {
        id
        preview
      }
    }
    customFields {
      weight
      specifications
      usage
      detailImage {
        id
        preview
      }
    }
  }
`;e`
  query product($slug: String, $id: ID) {
    product(slug: $slug, id: $id) {
      ...DetailedProduct
    }
  }
`;var i=e`
  fragment ListedProduct on SearchResult {
    productId
    productName
    slug
    productAsset {
      id
      preview
    }
    currencyCode
    priceWithTax {
      ... on PriceRange {
        min
        max
      }
      ... on SinglePrice {
        value
      }
    }
  }
`;e`
  query search($input: SearchInput!) {
    search(input: $input) {
      totalItems
      items {
        ...ListedProduct
      }
      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
          }
        }
      }
    }
  }
  ${i}
`;e`
  query searchFacetValues($input: SearchInput!) {
    search(input: $input) {
      totalItems
      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
          }
        }
      }
    }
  }
  ${i}
`;export{n as a,o as b};

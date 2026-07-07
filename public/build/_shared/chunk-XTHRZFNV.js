import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-CG66FP4Q.js";

// app/constants.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\constants.ts"
  );
  import.meta.hot.lastModified = "1782568359049.188";
}
var APP_META_TITLE = "Vendure Remix Storefront";
var APP_META_DESCRIPTION = "A headless commerce storefront starter kit built with Remix & Vendure";
var DEMO_API_URL = "https://readonlydemo.vendure.io/shop-api";
var API_URL = typeof process !== "undefined" ? process.env.VENDURE_API_URL ?? DEMO_API_URL : DEMO_API_URL;

export {
  APP_META_TITLE,
  APP_META_DESCRIPTION,
  API_URL
};
//# sourceMappingURL=/build/_shared/chunk-XTHRZFNV.js.map

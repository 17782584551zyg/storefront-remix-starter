import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-CG66FP4Q.js";

// app/utils/class-names.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\class-names.ts"
  );
  import.meta.hot.lastModified = "1782487989617.7832";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export {
  classNames
};
//# sourceMappingURL=/build/_shared/chunk-7GVQEKB5.js.map

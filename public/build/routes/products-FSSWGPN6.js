import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-MCQ6ZGWR.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import "/build/_shared/chunk-BBL5WSQK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-CG66FP4Q.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/products.tsx
init_remix_hmr();
var import_node = __toESM(require_node(), 1);
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\products.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\products.tsx"
  );
  import.meta.hot.lastModified = "1783385360456.6167";
}
function ProductsPage() {
  _s();
  const {
    collections
  } = useLoaderData();
  const iconMap = {
    "shirt": "M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 01.35.85l-4.86 4.86a.5.5 0 01-.85.35V3.21a.5.5 0 01.85-.35l4.86 4.86a.5.5 0 01.35.85h-6.87a.5.5 0 01-.35-.15L5.5 3.56a.5.5 0 01-.35-.85z",
    "sofa": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
    "briefcase": "M6 2a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2H6z",
    "sparkles": "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    "toy": "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
    "dumbbell": "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    "home": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    "flower": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    "smartphone": "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    "cat": "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    "gift": "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    "wrench": "M17.066 6.26a1 1 0 00-1.067.28l-2.906 3.87a2 2 0 01-1.796.73h-3.27a2 2 0 01-1.796-.73L4.067 6.54a1 1 0 00-1.067-.28 1 1 0 00-.686 1.18l1.94 8.676a2 2 0 01-.46 1.41l-1.905 1.905a1 1 0 00.28 1.414l3.873 2.905a1 1 0 001.066.28h3.27a1 1 0 001.067-.28l3.873-2.905a1 1 0 00.28-1.414l-1.905-1.905a2 2 0 01-.46-1.41l1.94-8.676a1 1 0 00-.686-1.18z",
    "pen-tool": "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    "car": "M13 10V3L4 14h7v7l9-11h-7z",
    "heart": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    "factory": "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    "package": "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
    "truck": "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    "gem": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    "lightbulb": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    "default": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  };
  const getIconForName = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("apparel") || lowerName.includes("clothing") || lowerName.includes("shirt") || lowerName.includes("dress"))
      return iconMap["shirt"];
    if (lowerName.includes("furniture") || lowerName.includes("sofa") || lowerName.includes("chair"))
      return iconMap["sofa"];
    if (lowerName.includes("bag") || lowerName.includes("case") || lowerName.includes("briefcase"))
      return iconMap["briefcase"];
    if (lowerName.includes("beauty") || lowerName.includes("cosmetic") || lowerName.includes("makeup"))
      return iconMap["sparkles"];
    if (lowerName.includes("toy") || lowerName.includes("game"))
      return iconMap["toy"];
    if (lowerName.includes("sport") || lowerName.includes("fitness") || lowerName.includes("dumbbell"))
      return iconMap["dumbbell"];
    if (lowerName.includes("home") || lowerName.includes("house"))
      return iconMap["home"];
    if (lowerName.includes("garden") || lowerName.includes("flower") || lowerName.includes("outdoor"))
      return iconMap["flower"];
    if (lowerName.includes("electronic") || lowerName.includes("phone") || lowerName.includes("smart"))
      return iconMap["smartphone"];
    if (lowerName.includes("pet") || lowerName.includes("cat") || lowerName.includes("dog"))
      return iconMap["cat"];
    if (lowerName.includes("gift") || lowerName.includes("natural"))
      return iconMap["gift"];
    if (lowerName.includes("hardware") || lowerName.includes("tool"))
      return iconMap["wrench"];
    if (lowerName.includes("office") || lowerName.includes("stationery"))
      return iconMap["pen-tool"];
    if (lowerName.includes("automotive") || lowerName.includes("car") || lowerName.includes("vehicle"))
      return iconMap["car"];
    if (lowerName.includes("health") || lowerName.includes("medical") || lowerName.includes("heart"))
      return iconMap["heart"];
    if (lowerName.includes("industrial") || lowerName.includes("factory"))
      return iconMap["factory"];
    if (lowerName.includes("packaging") || lowerName.includes("box"))
      return iconMap["package"];
    if (lowerName.includes("dropship") || lowerName.includes("shipping") || lowerName.includes("truck"))
      return iconMap["truck"];
    if (lowerName.includes("jewelry") || lowerName.includes("gem") || lowerName.includes("ring"))
      return iconMap["gem"];
    if (lowerName.includes("lighting") || lowerName.includes("lamp") || lowerName.includes("bulb"))
      return iconMap["lightbulb"];
    return iconMap["default"];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-amber-500/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-2", children: "4,000+ Clients Trust Us" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Find your reliable products and save, let's factory price." }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg", children: "Get Started" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Warehouse%20interior%20with%20shelves%20full%20of%20products%20and%20shipping%20boxes&image_size=landscape_4_3", alt: "Warehouse", className: "w-80 h-60 object-cover rounded-xl shadow-lg" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold", children: "98%" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: "Customer Satisfaction" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "Product categories" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Browse through our product categories to find items for your business." }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4", children: collections && collections.length > 0 ? collections.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 cursor-pointer", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2", children: category.featuredAsset ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: category.featuredAsset.preview, alt: category.name, className: "w-6 h-6 object-contain" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 117,
          columnNumber: 47
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: getIconForName(category.name) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 118,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 117,
          columnNumber: 149
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 116,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-700 text-center", children: category.name }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 121,
          columnNumber: 19
        }, this)
      ] }, category.id || index, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 115,
        columnNumber: 91
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full text-center py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "No categories found." }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 123,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 122,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 bg-gray-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Are you looking for more categories?" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "If you cannot find your target product, we can also source any product for you." }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg", children: "Tell us more" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Customized products sourcing" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-6", children: "Whether you need to customize products from China or have your own design, we can help you find the best manufacturers, negotiate the best price, and ensure the quality." }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-6", children: "Whether you need to customize products from China or have your own design, we can help you find the best manufacturers, negotiate the best price, and ensure the quality." }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg", children: "Get a free quote" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Custom%20product%20manufacturing%20process%20with%20design%20sketches&image_size=square", alt: "Custom Products", className: "w-full aspect-square object-cover rounded-xl" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 155,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Factory%20production%20line%20for%20custom%20products&image_size=square", alt: "Factory", className: "w-full aspect-square object-cover rounded-xl mt-8" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 156,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CNC%20machining%20and%20product%20development%20process&image_size=landscape_4_3", alt: "Product Development", className: "w-full aspect-video object-cover rounded-xl shadow-lg" }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 166,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "New Product Development" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-6", children: "If you have a product idea but don't know how to make it real, we can help you turn your idea into reality. Our product development team will handle everything from design to production." }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 170,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg", children: "Share my idea" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 173,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 164,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 163,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "We can do more than Alibaba" }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 183,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 rounded-xl p-8 border-t-4 border-orange-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900", children: "Why friendly to small businesses" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 190,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-orange-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 192,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 191,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "Whether you want to start sourcing products from China or have already been through the hurdles, we have the sourcing team to help you to lower your costs and boost your business." }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 195,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-orange-500 font-semibold hover:underline", children: "15% cheaper than Alibaba ->" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 rounded-xl p-8 border-t-4 border-orange-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900", children: "Our 1-1 agent assists you in every aspect" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 203,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6 text-orange-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 205,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 204,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 202,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "We will assign a specific agent for you in the sourcing process. The agent will help you from product research, supplier verification, quality control, shipping, and everything in between." }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-orange-500 font-semibold hover:underline", children: "Product quality is our priority ->" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 182,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Product%20catalog%20book%20or%20magazine%20cover&image_size=portrait_4_3", alt: "Product Catalog", className: "w-32 h-40 object-cover rounded-lg" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 221,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Product monthly report" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 223,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: 'We will send the hottest products from "1688.com" to your inbox for free!' }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 224,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "First Name", className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Last Name", className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", placeholder: "Your Email", className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg", children: "Subscribe Now" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 231,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 219,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 218,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s(ProductsPage, "dTT4S+S3CNb1quVXMYje3OPgGpE=", false, function() {
  return [useLoaderData];
});
_c = ProductsPage;
var _c;
$RefreshReg$(_c, "ProductsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProductsPage as default
};
//# sourceMappingURL=/build/routes/products-FSSWGPN6.js.map

import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  init_esm,
  useLoaderData,
  useMatches
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

// app/routes/solutions.shipping.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\solutions.shipping.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\solutions.shipping.tsx"
  );
  import.meta.hot.lastModified = "1783503321971.1733";
}
function ShippingSolutionsPage() {
  _s();
  const {
    images
  } = useLoaderData();
  const matches = useMatches();
  const rootData = matches.find((m) => m.pathname === "/")?.data;
  const backendUrl = rootData?.backendUrl || "";
  const getImageUrl = (name) => {
    const path = images[name];
    if (path && backendUrl) {
      return `${backendUrl}${path}`;
    }
    return null;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 relative overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" }, void 0, false, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" }, void 0, false, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6 relative z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-6", children: "Fast & Secure Global Shipping" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 55,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white/90 text-lg mb-8", children: "Providing flexible shipping solutions for businesses of any size." }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 58,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl", children: "Get Started" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getImageUrl("hero-image") || "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Container%20shipping%20port%20with%20cargo%20containers%20and%20trucks&image_size=landscape_4_3", alt: "Global Shipping", className: "w-full aspect-video object-cover rounded-xl shadow-lg" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: "Delivery Time" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 70,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xl font-bold text-orange-500", children: "3-5 Days" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 71,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 69,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3 h-3 bg-green-500 rounded-full animate-pulse" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 74,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-green-600 font-medium", children: "On Time" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 75,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/solutions.shipping.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "International Express" }, void 0, false, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "For goods under 500kg, our international express service can deliver directly to your door in 3-5 days in most countries and regions." }, void 0, false, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getImageUrl("international-express") || "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shipping%20boxes%20with%20DHL%20UPS%20FedEx%20logistics%20company%20logos&image_size=landscape_4_3", alt: "International Express", className: "w-full aspect-video object-cover rounded-xl shadow-lg" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium", children: "DHL, UPS, FedEx, DPD" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 107,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 106,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 105,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Competitive Pricing" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 111,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Enjoy our discounted express rates based on shipment weight for lower shipping costs." }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 112,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 119,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 118,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 117,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Dangerous Goods Shipping" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 123,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Our network safely transports all types of goods including batteries, liquids, and powders." }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 124,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 122,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 131,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 130,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Insurance Coverage" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 135,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "In case of damage, we work closely with carriers and suppliers to ensure compensation for shipping costs and product value." }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 136,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg", children: "Get a Quote" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/solutions.shipping.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/solutions.shipping.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "Port to Port Shipping" }, void 0, false, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "If you prefer to use your own freight forwarder for local logistics, we can deliver your goods to any designated sea, air, or railway port." }, void 0, false, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl p-8 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getImageUrl("sea-freight") || "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cargo%20ship%20carrying%20containers%20on%20the%20ocean&image_size=landscape_4_3", alt: "Sea Freight", className: "w-full aspect-video object-cover rounded-xl" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 164,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 170,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 168,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900", children: "Sea Freight" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 173,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 167,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "This is the most economical shipping method. From China to destination ports, it only takes 15-40 days. We will advise your shipment to choose LCL or FCL." }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2 text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 181,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 180,
                  columnNumber: 21
                }, this),
                "FCL (Full Container Load)"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 179,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 187,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 186,
                  columnNumber: 21
                }, this),
                "LCL (Less than Container Load)"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 185,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 193,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 192,
                  columnNumber: 21
                }, this),
                "15-40 days transit time"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 191,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 178,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 166,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl p-8 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getImageUrl("air-freight") || "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cargo%20airplane%20loading%20containers%20at%20airport&image_size=landscape_4_3", alt: "Air Freight", className: "w-full aspect-video object-cover rounded-xl" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 203,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 202,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 209,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 208,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 207,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900", children: "Air Freight" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 212,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 206,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "This is the fastest shipping method. From China to destination airports, it only takes 2-5 days. For goods over 500kg, this option is more cost-effective than international express." }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2 text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 220,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 219,
                  columnNumber: 21
                }, this),
                "2-5 days transit time"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 218,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 226,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 225,
                  columnNumber: 21
                }, this),
                "Cost-effective for bulk cargo"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 224,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 232,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 231,
                  columnNumber: 21
                }, this),
                "Direct flights available"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 230,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 217,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl p-8 shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: getImageUrl("railway-freight") || "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Railway%20freight%20train%20carrying%20containers%20through%20countryside&image_size=landscape_4_3", alt: "Railway Freight", className: "w-full aspect-video object-cover rounded-xl" }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 242,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 241,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 248,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 247,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 246,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900", children: "Railway Freight" }, void 0, false, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 251,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "We provide China-Europe Railway Express FCL/LCL transport services. Railway freight takes half the time of sea freight and costs less than air freight." }, void 0, false, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 253,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-2 text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 259,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 258,
                  columnNumber: 21
                }, this),
                "China-Europe Railway Express"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 257,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 265,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 264,
                  columnNumber: 21
                }, this),
                "Half the time of sea freight"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 263,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 271,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/solutions.shipping.tsx",
                  lineNumber: 270,
                  columnNumber: 21
                }, this),
                "Lower cost than air freight"
              ] }, void 0, true, {
                fileName: "app/routes/solutions.shipping.tsx",
                lineNumber: 269,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/solutions.shipping.tsx",
              lineNumber: 256,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/solutions.shipping.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/solutions.shipping.tsx",
          lineNumber: 240,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/solutions.shipping.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/solutions.shipping.tsx",
      lineNumber: 150,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-6", children: "Need Custom Shipping Solutions?" }, void 0, false, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 284,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white/90 text-lg mb-8", children: "Our logistics experts will analyze your shipping needs and provide the most cost-effective solution." }, void 0, false, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 287,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl", children: "Contact Our Logistics Team" }, void 0, false, {
        fileName: "app/routes/solutions.shipping.tsx",
        lineNumber: 290,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/solutions.shipping.tsx",
      lineNumber: 283,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/solutions.shipping.tsx",
      lineNumber: 282,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/solutions.shipping.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(ShippingSolutionsPage, "yIBv5ELubUPU0l7k2Apjh5vdDRI=", false, function() {
  return [useLoaderData, useMatches];
});
_c = ShippingSolutionsPage;
var _c;
$RefreshReg$(_c, "ShippingSolutionsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ShippingSolutionsPage as default
};
//# sourceMappingURL=/build/routes/solutions.shipping-WD3XGW2N.js.map

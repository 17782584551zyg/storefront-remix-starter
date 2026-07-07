import {
  Link,
  init_esm
} from "/build/_shared/chunk-LJTZQOEY.js";
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
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/index.tsx
init_remix_hmr();

// app/components/home/HeroBanner.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\home\\\\HeroBanner.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\home\\HeroBanner.tsx"
  );
  import.meta.hot.lastModified = "1783385356143.0215";
}
function HeroBanner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row items-center justify-between gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 text-center md:text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl md:text-4xl font-bold mb-6", children: "One-Stop Cross-Border E-commerce Solutions" }, void 0, false, {
        fileName: "app/components/home/HeroBanner.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg mb-8 opacity-90", children: "We help you easily import from China" }, void 0, false, {
        fileName: "app/components/home/HeroBanner.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white/80 mb-8 max-w-xl mx-auto md:mx-0", children: "Focused on cross-border e-commerce, providing full-chain service support to help Chinese brands go global. From product sourcing, logistics to payment, one-stop solution for your import challenges." }, void 0, false, {
        fileName: "app/components/home/HeroBanner.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center md:justify-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/services", className: "px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl", children: "Get Started" }, void 0, false, {
          fileName: "app/components/home/HeroBanner.tsx",
          lineNumber: 37,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300", children: "Learn More" }, void 0, false, {
          fileName: "app/components/home/HeroBanner.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/HeroBanner.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center md:justify-start gap-8 mt-12", children: [{
        number: "4000+",
        label: "Clients"
      }, {
        number: "120+",
        label: "Countries"
      }, {
        number: "500M+",
        label: "Annual Revenue"
      }, {
        number: "200+",
        label: "Team Members"
      }].map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl font-bold", children: stat.number }, void 0, false, {
          fileName: "app/components/home/HeroBanner.tsx",
          lineNumber: 58,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm opacity-80", children: stat.label }, void 0, false, {
          fileName: "app/components/home/HeroBanner.tsx",
          lineNumber: 59,
          columnNumber: 19
        }, this)
      ] }, stat.label, true, {
        fileName: "app/components/home/HeroBanner.tsx",
        lineNumber: 57,
        columnNumber: 28
      }, this)) }, void 0, false, {
        fileName: "app/components/home/HeroBanner.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/HeroBanner.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20ecommerce%20warehouse%20with%20shipping%20boxes%20and%20technology&image_size=landscape_4_3", alt: "E-commerce Solutions", className: "w-full max-w-lg mx-auto rounded-xl shadow-2xl" }, void 0, false, {
      fileName: "app/components/home/HeroBanner.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/home/HeroBanner.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/HeroBanner.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/home/HeroBanner.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/HeroBanner.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = HeroBanner;
var _c;
$RefreshReg$(_c, "HeroBanner");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/FeaturesSection.tsx
init_remix_hmr();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\home\\\\FeaturesSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\home\\FeaturesSection.tsx"
  );
  import.meta.hot.lastModified = "1783385356024.366";
}
function FeaturesSection() {
  const features = [{
    icon: "warehouse",
    title: "Global Warehousing & Shipping",
    description: "Warehouse network covering 120+ countries worldwide, intelligent warehouse management, fastest delivery in 3 days, enabling your products to reach global consumers quickly."
  }, {
    icon: "search",
    title: "Professional Product Sourcing",
    description: "Big data analysis based product recommendations, one-on-one guidance from senior sourcing team, helping you discover hot-selling products and reduce sourcing risks."
  }, {
    icon: "truck",
    title: "Full-Chain Logistics Service",
    description: "From domestic pickup, international shipping to last-mile delivery, providing door-to-door one-stop logistics solutions with full tracking capability."
  }, {
    icon: "credit-card",
    title: "Multi-Currency Payment Support",
    description: "Supporting 30+ major currencies including USD, EUR, GBP, transparent exchange rates, low fees, and guaranteed fund security."
  }];
  const iconPaths = {
    warehouse: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v4h4v3l4-7h-4V7z",
    truck: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    "credit-card": "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "Core Advantages" }, void 0, false, {
        fileName: "app/components/home/FeaturesSection.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-600", children: "Why Choose Us" }, void 0, false, {
        fileName: "app/components/home/FeaturesSection.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-500 mt-2", children: "Years of experience in cross-border e-commerce, accumulated rich industry experience and resources, committed to providing the best quality service for clients." }, void 0, false, {
        fileName: "app/components/home/FeaturesSection.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/FeaturesSection.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: iconPaths[feature.icon] }, void 0, false, {
        fileName: "app/components/home/FeaturesSection.tsx",
        lineNumber: 63,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/home/FeaturesSection.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/home/FeaturesSection.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: feature.title }, void 0, false, {
        fileName: "app/components/home/FeaturesSection.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-600 text-sm", children: feature.description }, void 0, false, {
        fileName: "app/components/home/FeaturesSection.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this)
    ] }, feature.title, true, {
      fileName: "app/components/home/FeaturesSection.tsx",
      lineNumber: 60,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/home/FeaturesSection.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/FeaturesSection.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/FeaturesSection.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c2 = FeaturesSection;
var _c2;
$RefreshReg$(_c2, "FeaturesSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/StatsSection.tsx
init_remix_hmr();
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\home\\\\StatsSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\home\\StatsSection.tsx"
  );
  import.meta.hot.lastModified = "1783385356396.5833";
}
function StatsSection() {
  _s();
  const stats = [{
    value: 4e3,
    suffix: "+",
    label: "Clients",
    description: "Worldwide"
  }, {
    value: 120,
    suffix: "+",
    label: "Countries",
    description: "Global Coverage"
  }, {
    value: 500,
    suffix: "M+",
    label: "Annual Revenue",
    description: "Steady Growth"
  }, {
    value: 200,
    suffix: "+",
    label: "Team Members",
    description: "Industry Experts"
  }];
  const [counts, setCounts] = (0, import_react2.useState)(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 2e3;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                clearInterval(timer);
                const newCounts = [...counts];
                newCounts[index] = stat.value;
                setCounts(newCounts);
              } else {
                const newCounts = [...counts];
                newCounts[index] = Math.floor(current);
                setCounts(newCounts);
              }
            }, duration / steps);
          });
        }
      });
    }, {
      threshold: 0.3
    });
    const section = document.getElementById("stats-section");
    if (section) {
      observer.observe(section);
    }
    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, counts]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { id: "stats-section", className: "py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Numbers Speak" }, void 0, false, {
        fileName: "app/components/home/StatsSection.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-white/80", children: "Our Achievements" }, void 0, false, {
        fileName: "app/components/home/StatsSection.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-white/60 mt-2", children: "Proving strength with data, winning trust with service" }, void 0, false, {
        fileName: "app/components/home/StatsSection.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/StatsSection.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-4xl md:text-5xl font-bold mb-2", children: [
        counts[index],
        stat.suffix
      ] }, void 0, true, {
        fileName: "app/components/home/StatsSection.tsx",
        lineNumber: 101,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-xl font-semibold mb-1", children: stat.label }, void 0, false, {
        fileName: "app/components/home/StatsSection.tsx",
        lineNumber: 104,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-white/60", children: stat.description }, void 0, false, {
        fileName: "app/components/home/StatsSection.tsx",
        lineNumber: 105,
        columnNumber: 15
      }, this)
    ] }, stat.label, true, {
      fileName: "app/components/home/StatsSection.tsx",
      lineNumber: 100,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/home/StatsSection.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/StatsSection.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/StatsSection.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s(StatsSection, "efRyN0x0JpkQAfyyTF6bhi8Bits=");
_c3 = StatsSection;
var _c3;
$RefreshReg$(_c3, "StatsSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/ServicesSection.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\home\\\\ServicesSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\home\\ServicesSection.tsx"
  );
  import.meta.hot.lastModified = "1783385356370.5503";
}
function ServicesSection() {
  const services = [{
    title: "One-Stop Cross-Border E-commerce Solutions",
    description: "From store setup to operations and promotion, providing comprehensive cross-border e-commerce service support, allowing you to focus on your products.",
    features: ["Store Registration", "Product Listing", "Operations Optimization", "Data Analysis"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ecommerce%20dashboard%20with%20analytics%20charts&image_size=square",
    link: "/services"
  }, {
    title: "Intelligent Warehousing & Logistics",
    description: "Global intelligent warehouse distribution, shipping from nearest location, reducing logistics costs, improving delivery efficiency, providing your customers with better shopping experience.",
    features: ["Global Warehousing", "Intelligent Distribution", "Fast Delivery", "Real-time Tracking"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20logistics%20warehouse%20with%20robots&image_size=square",
    link: "/solutions/shipping"
  }, {
    title: "Multi-Platform Payment Solutions",
    description: "Supporting PayPal, Stripe and other mainstream payment methods, multi-currency automatic conversion, fund security guaranteed, fast arrival.",
    features: ["Multi-Platform Payment", "Multi-Currency Support", "Security Guarantee", "Fast Settlement"],
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Secure%20payment%20transaction%20interface&image_size=square",
    link: "/payment-information"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "Our Services" }, void 0, false, {
        fileName: "app/components/home/ServicesSection.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-600", children: "What We Offer" }, void 0, false, {
        fileName: "app/components/home/ServicesSection.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-500 mt-2", children: "Full-chain cross-border e-commerce services, meeting all your needs from store opening to operations" }, void 0, false, {
        fileName: "app/components/home/ServicesSection.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/ServicesSection.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid md:grid-cols-3 gap-8", children: services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: service.image, alt: service.title, className: "w-full h-48 object-cover" }, void 0, false, {
        fileName: "app/components/home/ServicesSection.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: service.title }, void 0, false, {
          fileName: "app/components/home/ServicesSection.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-gray-600 text-sm mb-4", children: service.description }, void 0, false, {
          fileName: "app/components/home/ServicesSection.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "space-y-2 mb-6", children: service.features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "flex items-center gap-2 text-sm text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/components/home/ServicesSection.tsx",
            lineNumber: 65,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/home/ServicesSection.tsx",
            lineNumber: 64,
            columnNumber: 23
          }, this),
          feature
        ] }, feature, true, {
          fileName: "app/components/home/ServicesSection.tsx",
          lineNumber: 63,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "app/components/home/ServicesSection.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: service.link, className: "inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors", children: [
          "Learn More",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, false, {
            fileName: "app/components/home/ServicesSection.tsx",
            lineNumber: 73,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/home/ServicesSection.tsx",
            lineNumber: 72,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/ServicesSection.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/ServicesSection.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this)
    ] }, service.title, true, {
      fileName: "app/components/home/ServicesSection.tsx",
      lineNumber: 57,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/home/ServicesSection.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/ServicesSection.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/ServicesSection.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c4 = ServicesSection;
var _c4;
$RefreshReg$(_c4, "ServicesSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/TestimonialsSection.tsx
init_remix_hmr();
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\home\\\\TestimonialsSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\home\\TestimonialsSection.tsx"
  );
  import.meta.hot.lastModified = "1783385356712.75";
}
function TestimonialsSection() {
  const testimonials = [{
    name: "Zhang Ming",
    title: "Founder",
    company: "A Well-Known Cross-Border Brand",
    content: "We have been working together for over two years. From a small store to now with annual sales of over 10 million, we cannot do without their professional service and support. The team is very responsible and always solves problems promptly."
  }, {
    name: "Li Hua",
    title: "Operations Director",
    company: "A Home Goods Brand",
    content: "Logistics efficiency has improved by 50%, and customer satisfaction has significantly increased. Their intelligent warehousing system is really powerful, saving us a lot of costs and effort."
  }, {
    name: "Wang Qiang",
    title: "CEO",
    company: "An Electronics Company",
    content: "Payment security is guaranteed, and funds arrive quickly. Most importantly, the exchange rate is transparent with no hidden fees, making our fund management much smoother."
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "Client Testimonials" }, void 0, false, {
        fileName: "app/components/home/TestimonialsSection.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-600", children: "What They Say" }, void 0, false, {
        fileName: "app/components/home/TestimonialsSection.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-500 mt-2", children: "Real feedback from our partners" }, void 0, false, {
        fileName: "app/components/home/TestimonialsSection.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/TestimonialsSection.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((testimonial) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-1 mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { className: "w-4 h-4 text-yellow-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, void 0, false, {
        fileName: "app/components/home/TestimonialsSection.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this) }, i, false, {
        fileName: "app/components/home/TestimonialsSection.tsx",
        lineNumber: 55,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/components/home/TestimonialsSection.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-600 mb-6", children: testimonial.content }, void 0, false, {
        fileName: "app/components/home/TestimonialsSection.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { className: "w-6 h-6 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }, void 0, false, {
          fileName: "app/components/home/TestimonialsSection.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/home/TestimonialsSection.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/home/TestimonialsSection.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "font-semibold text-gray-900", children: testimonial.name }, void 0, false, {
            fileName: "app/components/home/TestimonialsSection.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
            testimonial.title,
            " @ ",
            testimonial.company
          ] }, void 0, true, {
            fileName: "app/components/home/TestimonialsSection.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/home/TestimonialsSection.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/TestimonialsSection.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this)
    ] }, testimonial.name, true, {
      fileName: "app/components/home/TestimonialsSection.tsx",
      lineNumber: 53,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/components/home/TestimonialsSection.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/TestimonialsSection.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/TestimonialsSection.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c5 = TestimonialsSection;
var _c5;
$RefreshReg$(_c5, "TestimonialsSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/PartnersSection.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\home\\\\PartnersSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\home\\PartnersSection.tsx"
  );
  import.meta.hot.lastModified = "1783385356317.9402";
}
function PartnersSection() {
  const partners = [{
    name: "PayPal",
    description: "Payment Partner"
  }, {
    name: "Stripe",
    description: "Payment Partner"
  }, {
    name: "UPS",
    description: "Logistics Partner"
  }, {
    name: "DHL",
    description: "Logistics Partner"
  }, {
    name: "Amazon",
    description: "Platform Partner"
  }, {
    name: "eBay",
    description: "Platform Partner"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "Our Partners" }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-gray-600", children: "Trusted Partners" }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-gray-500 mt-2", children: "Long-term cooperative relationships with world-renowned enterprises" }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/PartnersSection.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6", children: partners.map((partner) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { className: "w-8 h-8 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 60,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "font-semibold text-gray-900", children: partner.name }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-xs text-gray-500", children: partner.description }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 64,
        columnNumber: 15
      }, this)
    ] }, partner.name, true, {
      fileName: "app/components/home/PartnersSection.tsx",
      lineNumber: 57,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/home/PartnersSection.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/PartnersSection.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/PartnersSection.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_c6 = PartnersSection;
function CtaSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "py-12 bg-gradient-to-r from-orange-500 to-orange-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4", children: "Ready to Start Your Cross-Border Journey?" }, void 0, false, {
      fileName: "app/components/home/PartnersSection.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-white/80 mb-8", children: "Join us and let our professional team help you achieve your import dreams. Consult now and enjoy exclusive discounts!" }, void 0, false, {
      fileName: "app/components/home/PartnersSection.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/services", className: "px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg", children: "Get a Free Consultation" }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/about", className: "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300", children: "Learn More" }, void 0, false, {
        fileName: "app/components/home/PartnersSection.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/PartnersSection.tsx",
      lineNumber: 81,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/PartnersSection.tsx",
    lineNumber: 74,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/home/PartnersSection.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/PartnersSection.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_c22 = CtaSection;
var _c6;
var _c22;
$RefreshReg$(_c6, "PartnersSection");
$RefreshReg$(_c22, "CtaSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\index.tsx"
  );
  import.meta.hot.lastModified = "1783385360051.5728";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(HeroBanner, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FeaturesSection, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(StatsSection, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ServicesSection, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TestimonialsSection, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PartnersSection, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CtaSection, {}, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c7 = Index;
var _c7;
$RefreshReg$(_c7, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-76GUDJSN.js.map

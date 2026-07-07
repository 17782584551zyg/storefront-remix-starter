import {
  classNames
} from "/build/_shared/chunk-7GVQEKB5.js";
import {
  CartContents
} from "/build/_shared/chunk-CJMKKQ5K.js";
import {
  Price
} from "/build/_shared/chunk-IILBQMIO.js";
import {
  require_i18next
} from "/build/_shared/chunk-QZYG7WHP.js";
import {
  Je,
  mt
} from "/build/_shared/chunk-R5BHNF67.js";
import "/build/_shared/chunk-4KYYPW5T.js";
import {
  APP_META_DESCRIPTION,
  APP_META_TITLE
} from "/build/_shared/chunk-XTHRZFNV.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-2QJY4JOV.js";
import "/build/_shared/chunk-FX3BUYEM.js";
import {
  require_solid
} from "/build/_shared/chunk-76TTLXDT.js";
import {
  require_outline
} from "/build/_shared/chunk-L7FVEPUN.js";
import {
  useTranslation
} from "/build/_shared/chunk-7LRNVKNK.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  init_esm,
  useFetcher,
  useLoaderData,
  useLocation,
  useMatches,
  useRouteError
} from "/build/_shared/chunk-LJTZQOEY.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  isRouteErrorResponse
} from "/build/_shared/chunk-BBL5WSQK.js";
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

// app/root.tsx
init_remix_hmr();

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/root.tsx
init_esm();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EWWB45FK.css";

// app/components/header/Header.tsx
init_remix_hmr();
init_esm();
var import_outline = __toESM(require_outline(), 1);

// app/utils/use-root-loader.ts
init_remix_hmr();
init_esm();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\use-root-loader.ts"
  );
  import.meta.hot.lastModified = "1782487989639.4685";
}
function useRootLoader() {
  return useMatches().find((match) => match.id === "root").data;
}

// app/components/header/Header.tsx
var import_solid = __toESM(require_solid(), 1);

// app/utils/use-scrolling-up.ts
init_remix_hmr();
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\use-scrolling-up.ts"
  );
  import.meta.hot.lastModified = "1782487989644.2666";
}
var useScrollingUp = () => {
  let prevScroll;
  if (typeof window !== "undefined") {
    prevScroll = window.pageYOffset;
  }
  const [scrollingUp, setScrollingUp] = (0, import_react2.useState)(false);
  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll > currScroll;
    setScrollingUp(isScrolled);
    prevScroll = currScroll;
  };
  (0, import_react2.useEffect)(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollingUp;
};

// app/components/header/Header.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\header\\\\Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\header\\Header.tsx"
  );
  import.meta.hot.lastModified = "1783386017667.7166";
}
var navItems = [{
  label: "Our Services",
  children: [{
    label: "Purchasing Service",
    href: "/services"
  }, {
    label: "Dropshipping Service",
    href: "/services/dropshipping"
  }]
}, {
  label: "Solutions",
  children: [{
    label: "Shipping Solutions",
    href: "/solutions/shipping"
  }, {
    label: "Quality Control",
    href: "/solutions/quality-control"
  }]
}, {
  label: "Products",
  href: "/products"
}, {
  label: "About",
  children: [{
    label: "Payment Information",
    href: "/payment-information"
  }, {
    label: "About Us",
    href: "/about"
  }]
}, {
  label: "Resources",
  children: [{
    label: "Sourcing Guide",
    href: "/resources"
  }, {
    label: "Our Blog",
    href: "/resources"
  }, {
    label: "Import from China",
    href: "/resources"
  }]
}];
var languages = [{
  code: "en",
  label: "English"
}, {
  code: "fr",
  label: "Fran\xE7ais"
}, {
  code: "de",
  label: "Deutsch"
}, {
  code: "zh",
  label: "\u4E2D\u6587"
}, {
  code: "es",
  label: "Espa\xF1ol"
}, {
  code: "it",
  label: "Italiano"
}, {
  code: "nl",
  label: "Nederlands"
}, {
  code: "pl",
  label: "Polski"
}, {
  code: "sv",
  label: "Svenska"
}, {
  code: "da",
  label: "Dansk"
}, {
  code: "no",
  label: "Norsk"
}];
function Header({
  onCartIconClick,
  cartQuantity
}) {
  _s();
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
  const isScrollingUp = useScrollingUp();
  const {
    t,
    i18n
  } = useTranslation();
  const [activeDropdown, setActiveDropdown] = (0, import_react4.useState)(null);
  const [showLangDropdown, setShowLangDropdown] = (0, import_react4.useState)(false);
  const dropdownRefs = (0, import_react4.useRef)({});
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/products") || location.pathname.startsWith("/collections") || location.pathname.startsWith("/product");
  const currentLocale = data.locale || "en";
  (0, import_react4.useEffect)(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      let isInsideDropdown = false;
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref?.contains(target)) {
          isInsideDropdown = true;
        }
      });
      if (!isInsideDropdown) {
        setActiveDropdown(null);
        setShowLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setShowLangDropdown(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: classNames(isScrollingUp ? "sticky top-0 z-50 animate-dropIn" : "", "bg-white shadow-md"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-6 py-3 flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-orange-500 font-bold", children: "Tai" }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 151,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-800 font-medium", children: "Sourcing" }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 152,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 150,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 149,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 148,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "hidden lg:flex items-center space-x-1", children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: (el) => {
      dropdownRefs.current[item.label] = el;
    }, className: "relative", children: item.children ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 px-3 py-2", onClick: () => setActiveDropdown(activeDropdown === item.label ? null : item.label), onMouseEnter: () => setActiveDropdown(item.label), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.label }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 163,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.ChevronDownIcon, { className: "w-4 h-4" }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 164,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 162,
        columnNumber: 19
      }, this),
      activeDropdown === item.label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-48 z-50 border border-gray-100", children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: child.href, className: "block px-6 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500 text-sm transition-colors duration-200", onClick: () => setActiveDropdown(null), children: child.label }, child.label, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 167,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 166,
        columnNumber: 53
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 161,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: "px-3 py-2 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300", children: item.label }, void 0, false, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 171,
      columnNumber: 23
    }, this) }, item.label, false, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 158,
      columnNumber: 33
    }, this)) }, void 0, false, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 157,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", ref: (el) => {
        dropdownRefs.current["language"] = el;
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors duration-300 px-2 py-1", onClick: () => setShowLangDropdown(!showLangDropdown), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.GlobeAltIcon, { className: "w-4 h-4" }, void 0, false, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: languages.find((l) => l.code === currentLocale)?.label || "English" }, void 0, false, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 183,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.ChevronDownIcon, { className: "w-3 h-3" }, void 0, false, {
            fileName: "app/components/header/Header.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 181,
          columnNumber: 13
        }, this),
        showLangDropdown && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-40 z-50 border border-gray-100", children: languages.map((lang) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${currentLocale === lang.code ? "bg-orange-50 text-orange-500" : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"}`, onClick: () => changeLanguage(lang.code), children: lang.label }, lang.code, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 187,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 186,
          columnNumber: 34
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: isSignedIn ? "/account" : "/sign-in", className: "flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors duration-300", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.UserIcon, { className: "w-4 h-4" }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 194,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm", children: isSignedIn ? t("account.myAccount") : t("account.signIn") }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 195,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 193,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 192,
        columnNumber: 11
      }, this),
      isProductPage && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "relative w-9 h-9 bg-orange-50 rounded-full text-orange-500 p-1 hover:bg-orange-100 transition-colors duration-300", onClick: onCartIconClick, "aria-label": "Open cart tray", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.ShoppingBagIcon, {}, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 201,
          columnNumber: 15
        }, this),
        cartQuantity ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute rounded-full -top-2 -right-2 bg-orange-500 min-w-6 min-h-6 flex items-center justify-center text-xs text-white p-1", children: cartQuantity }, void 0, false, {
          fileName: "app/components/header/Header.tsx",
          lineNumber: 202,
          columnNumber: 31
        }, this) : ""
      ] }, void 0, true, {
        fileName: "app/components/header/Header.tsx",
        lineNumber: 200,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header/Header.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header/Header.tsx",
    lineNumber: 147,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/header/Header.tsx",
    lineNumber: 146,
    columnNumber: 10
  }, this);
}
_s(Header, "OG83rovXRgxfRbaExXp4gtEjD5U=", false, function() {
  return [useRootLoader, useScrollingUp, useTranslation, useLocation];
});
_c = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_react12 = __toESM(require_react(), 1);

// app/components/cart/CartTray.tsx
init_remix_hmr();
var import_react5 = __toESM(require_react(), 1);
var import_outline2 = __toESM(require_outline(), 1);
init_esm();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\cart\\\\CartTray.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\cart\\CartTray.tsx"
  );
  import.meta.hot.lastModified = "1782487989265.1802";
}
function CartTray({
  open,
  onClose,
  activeOrder,
  adjustOrderLine,
  removeItem
}) {
  _s2();
  const currencyCode = activeOrder?.currencyCode || "USD" /* Usd */;
  const location = useLocation();
  const editable = !location.pathname.startsWith("/checkout");
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je.Root, { show: open, as: import_react5.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt, { as: "div", className: "fixed inset-0 overflow-hidden z-20", onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je.Child, { as: import_react5.Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt.Overlay, { className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-y-0 right-0 pl-10 max-w-full flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Je.Child, { as: import_react5.Fragment, enter: "transform transition ease-in-out duration-300 sm:duration-300", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-300 sm:duration-300", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-full flex flex-col bg-white shadow-xl overflow-y-scroll", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 py-6 overflow-y-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mt.Title, { className: "text-lg font-medium text-gray-900", children: t("cart.title") }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 57,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-3 h-7 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "-m-2 p-2 text-gray-400 hover:text-gray-500", onClick: () => onClose(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: t("common.closePanel") }, void 0, false, {
              fileName: "app/components/cart/CartTray.tsx",
              lineNumber: 62,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline2.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/cart/CartTray.tsx",
              lineNumber: 65,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 61,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 60,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8", children: activeOrder?.totalQuantity ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CartContents, { orderLines: activeOrder?.lines ?? [], currencyCode, editable, removeItem, adjustOrderLine }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 71,
          columnNumber: 53
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center h-48 text-xl text-gray-400", children: t("cart.empty") }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 71,
          columnNumber: 229
        }, this) }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartTray.tsx",
        lineNumber: 55,
        columnNumber: 19
      }, this),
      activeOrder?.totalQuantity && editable && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-t border-gray-200 py-6 px-4 sm:px-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: t("common.subtotal") }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 79,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: currencyCode && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { priceWithTax: activeOrder?.subTotalWithTax ?? 0, currencyCode }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 81,
            columnNumber: 44
          }, this) }, void 0, false, {
            fileName: "app/components/cart/CartTray.tsx",
            lineNumber: 80,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 78,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-0.5 text-sm text-gray-500", children: t("cart.shippingMessage") }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 84,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/checkout", onClick: () => onClose(false), className: "flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700", children: t("cart.checkout") }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 88,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/cart/CartTray.tsx",
          lineNumber: 87,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartTray.tsx",
        lineNumber: 77,
        columnNumber: 62
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 53,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartTray.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/cart/CartTray.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/cart/CartTray.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/cart/CartTray.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s2(CartTray, "kW2jYC7nVp2/SohMTqVbTbyrVn8=", false, function() {
  return [useLocation, useTranslation];
});
_c2 = CartTray;
var _c2;
$RefreshReg$(_c2, "CartTray");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/footer/Footer.tsx
init_remix_hmr();
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\footer\\\\Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\footer\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1783385355066.1494";
}
function Footer({
  collections
}) {
  _s3();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "bg-gray-900 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-bold mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-orange-500 font-bold", children: "Tai" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-gray-300 font-medium", children: "Sourcing" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 text-sm leading-relaxed mb-6", children: "Your trusted partner for importing from China. We provide one-stop sourcing solutions for global businesses." }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 44,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 49,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 48,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 47,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://wa.me/8617793529591", className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.322-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-400 uppercase mb-6", children: "MAIN MENU" }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Home" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 63,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/products", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Products" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 64,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/about", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "About Us" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 65,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/payment-information", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Payment Information" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 66,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Shipping Information" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-400 uppercase mb-6", children: "OUR SERVICE" }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/services", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Purchasing Service" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 74,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/services/dropshipping", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Dropshipping Service" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 75,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/solutions/shipping", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Shipping Solutions" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 76,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/solutions/quality-control", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Quality Control" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 77,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-400 uppercase mb-6", children: "CONTACT US" }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-xs uppercase mb-1", children: "Email" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 85,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "mailto:info@Taisourcing@gmail.com", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "info@Taisourcing@gmail.com" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 86,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-xs uppercase mb-1", children: "Tel (China)" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 89,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "tel:+8617793529591", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "+86 17793529591" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 90,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-gray-500 text-xs uppercase mb-1", children: "WhatsApp" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://wa.me/8617793529591", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "+86 17793529591" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { className: "text-sm font-semibold text-gray-400 uppercase mb-3", children: "WORKING HOURS" }, void 0, false, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "text-gray-400 text-sm", children: "Mon-Fri: 9:00 AM - 6:00 PM" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "text-gray-400 text-sm", children: "Sat: 9:00 AM - 4:00 PM" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "text-gray-500 text-xs mt-1", children: "(China Standard Time)" }, void 0, false, {
              fileName: "app/components/footer/Footer.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/footer/Footer.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer/Footer.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-12 pt-8 border-t border-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-500 text-sm", children: "Copyright 2026 Tai Sourcing. All Rights Reserved." }, void 0, false, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 110,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Privacy Policy" }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Terms of Service" }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "text-gray-400 hover:text-orange-500 text-sm transition-colors", children: "Cookie Policy" }, void 0, false, {
          fileName: "app/components/footer/Footer.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer/Footer.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer/Footer.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/footer/Footer.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer/Footer.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/footer/Footer.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s3(Footer, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c3 = Footer;
var _c3;
$RefreshReg$(_c3, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/use-active-order.tsx
init_remix_hmr();
init_esm();
var import_react9 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\use-active-order.tsx"
  );
  import.meta.hot.lastModified = "1782487989636.297";
}
function useActiveOrder() {
  const activeOrderFetcher = useFetcher();
  (0, import_react9.useEffect)(() => {
    if (activeOrderFetcher.state === "idle" && !activeOrderFetcher.data) {
      activeOrderFetcher.load("/api/active-order");
    }
  }, [activeOrderFetcher]);
  function refresh() {
    activeOrderFetcher.load("/api/active-order");
  }
  const { activeOrder } = activeOrderFetcher.data ?? {};
  const removeItem = (lineId) => {
    activeOrderFetcher.submit(
      {
        action: "removeItem",
        lineId
      },
      {
        method: "post",
        action: "/api/active-order"
      }
    );
  };
  const adjustOrderLine = (lineId, quantity) => {
    activeOrderFetcher.submit(
      {
        action: "adjustItem",
        lineId,
        quantity: quantity.toString()
      },
      {
        method: "post",
        action: "/api/active-order"
      }
    );
  };
  return {
    activeOrderFetcher,
    activeOrder,
    removeItem,
    adjustOrderLine,
    refresh
  };
}

// node_modules/remix-i18next/browser/react.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react10 = __toESM(require_react());
function useChangeLanguage(locale) {
  let { i18n } = useTranslation();
  (0, import_react10.useEffect)(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

// app/root.tsx
var import_i18next = __toESM(require_i18next(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var meta = () => {
  return [{
    title: APP_META_TITLE
  }, {
    description: APP_META_DESCRIPTION
  }];
};
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, ...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
var devMode = typeof process !== "undefined" && true;
var shouldRevalidate = ({
  nextUrl,
  currentUrl,
  formAction
}) => {
  if (currentUrl.pathname === "/sign-in") {
    return true;
  }
  if (currentUrl.pathname === "/account" && nextUrl.pathname === "/") {
    return true;
  }
  if (formAction === "/checkout/payment") {
    return true;
  }
  return false;
};
function App() {
  _s4();
  const [open, setOpen] = (0, import_react12.useState)(false);
  const loaderData = useLoaderData();
  const {
    collections
  } = loaderData;
  const {
    locale
  } = useLoaderData();
  const {
    i18n
  } = useTranslation();
  const {
    activeOrderFetcher,
    activeOrder,
    adjustOrderLine,
    removeItem,
    refresh
  } = useActiveOrder();
  useChangeLanguage(locale);
  (0, import_react12.useEffect)(() => {
    refresh();
  }, [loaderData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: locale, dir: i18n.dir(), id: "app", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "icon", href: "/favicon.ico", type: "image/png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, { onCartIconClick: () => setOpen(!open), cartQuantity: activeOrder?.totalQuantity ?? 0 }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, { context: {
        activeOrderFetcher,
        activeOrder,
        adjustOrderLine,
        removeItem
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CartTray, { open, onClose: setOpen, activeOrder, adjustOrderLine, removeItem }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, { collections }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      devMode && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 151,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_s4(App, "S/yjElHTGOHJYWCdrAYtOa+UIwU=", false, function() {
  return [useLoaderData, useLoaderData, useTranslation, useActiveOrder, useChangeLanguage];
});
_c4 = App;
function DefaultSparseErrorPage({
  tagline,
  headline,
  description
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", id: "app", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "icon", href: "/favicon.ico", type: "image/png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "flex flex-col items-center px-4 py-16 sm:py-32 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wide", children: tagline }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "mt-2 font-bold text-gray-900 tracking-tight text-4xl sm:text-5xl", children: headline }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-4 text-base text-gray-500 max-w-full break-words", children: description }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", className: "text-base font-medium text-primary-600 hover:text-primary-500 inline-flex gap-2", children: "Go back home" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      devMode && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 198,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 170,
    columnNumber: 10
  }, this);
}
_c22 = DefaultSparseErrorPage;
function ErrorBoundary() {
  _s22();
  let tagline = "Oopsy daisy";
  let headline = "Unexpected error";
  let description = "We couldn't handle your request. Please try again later.";
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    tagline = `${error.status} error`;
    headline = error.statusText;
    description = error.data;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DefaultSparseErrorPage, { tagline, headline, description }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 218,
    columnNumber: 10
  }, this);
}
_s22(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c32 = ErrorBoundary;
function CatchBoundary() {
  return ErrorBoundary();
}
_c42 = CatchBoundary;
var _c4;
var _c22;
var _c32;
var _c42;
$RefreshReg$(_c4, "App");
$RefreshReg$(_c22, "DefaultSparseErrorPage");
$RefreshReg$(_c32, "ErrorBoundary");
$RefreshReg$(_c42, "CatchBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links,
  meta,
  shouldRevalidate
};
//# sourceMappingURL=/build/root-BAZVNQY6.js.map

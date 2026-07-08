import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import "/build/_shared/chunk-X7W7OFLF.js";
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

// app/routes/admin.contact-forms.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.contact-forms.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.contact-forms.tsx"
  );
  import.meta.hot.lastModified = "1783503379032.138";
}
function AdminContactForms() {
  _s();
  const {
    contactForms
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: "Contact Form Submissions" }, void 0, false, {
        fileName: "app/routes/admin.contact-forms.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: [
        contactForms.length,
        " records"
      ] }, void 0, true, {
        fileName: "app/routes/admin.contact-forms.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.contact-forms.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "ID" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 71,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Name" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 72,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Email" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 73,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Phone" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 74,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Country" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Company" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Source" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Created At" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.contact-forms.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.contact-forms.tsx",
        lineNumber: 69,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: contactForms.map((form) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-900", children: form.id }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-900", children: [
          form.firstName,
          " ",
          form.lastName
        ] }, void 0, true, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-500", children: form.email }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 87,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-500", children: form.phone || "-" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 88,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-500", children: form.country || "-" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 89,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-500", children: form.company || "-" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 90,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${form.source === "services" ? "bg-blue-100 text-blue-800" : form.source === "monthly-report" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, children: form.source || "unknown" }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 92,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-4 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(form.createdAt).toLocaleString() }, void 0, false, {
          fileName: "app/routes/admin.contact-forms.tsx",
          lineNumber: 96,
          columnNumber: 21
        }, this)
      ] }, form.id, true, {
        fileName: "app/routes/admin.contact-forms.tsx",
        lineNumber: 82,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/routes/admin.contact-forms.tsx",
        lineNumber: 81,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.contact-forms.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.contact-forms.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this),
    contactForms.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: "No submissions found." }, void 0, false, {
      fileName: "app/routes/admin.contact-forms.tsx",
      lineNumber: 105,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.contact-forms.tsx",
      lineNumber: 104,
      columnNumber: 41
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.contact-forms.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.contact-forms.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.contact-forms.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(AdminContactForms, "CgHydMdkhW41z53pG/VAvbV0gvM=", false, function() {
  return [useLoaderData];
});
_c = AdminContactForms;
var _c;
$RefreshReg$(_c, "AdminContactForms");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminContactForms as default
};
//# sourceMappingURL=/build/routes/admin.contact-forms-RJ3IB2EF.js.map

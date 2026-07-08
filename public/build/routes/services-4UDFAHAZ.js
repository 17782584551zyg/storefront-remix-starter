import "/build/_shared/chunk-X7W7OFLF.js";
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

// app/routes/services.tsx
init_remix_hmr();
var import_react = __toESM(require_react(), 1);

// app/lib/graphql-client.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\lib\\graphql-client.ts"
  );
  import.meta.hot.lastModified = "1783417768585.7297";
}
var GraphqlClient = class {
  async request(query, variables) {
    const response = await fetch("/api/shop-api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        variables
      })
    });
    const result = await response.json();
    if (result.errors) {
      throw new Error(result.errors.map((e) => e.message).join("\n"));
    }
    return result.data;
  }
};
var graphqlClient = new GraphqlClient();

// app/routes/services.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\services.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\services.tsx"
  );
  import.meta.hot.lastModified = "1783496918792.4087";
}
function ServicesPage() {
  _s();
  const [formData, setFormData] = (0, import_react.useState)({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });
  const [submitting, setSubmitting] = (0, import_react.useState)(false);
  const [submitted, setSubmitted] = (0, import_react.useState)(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await graphqlClient.request(`
        mutation CreateContactForm($input: CreateContactFormInput!) {
          createContactForm(input: $input) {
            id
            firstName
            email
            createdAt
          }
        }
      `, {
        input: {
          ...formData,
          source: "services"
        }
      });
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        message: ""
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Failed to submit. Please try again or email us at info@taisourcing.asia");
    } finally {
      setSubmitting(false);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Start Your Project" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-1 bg-white/50 mx-auto rounded-full" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-2 border-orange-500 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-orange-600 mb-4", children: "Find New Suppliers" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 91,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 leading-relaxed mb-6", children: "If you are looking for new suppliers, we can help you find the best match and offer you a competitive price along with a cost-effective manufacturing solution. Compare our offer with any of your existing suppliers to see the value we can provide." }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 92,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-orange-600 font-medium mb-6", children: [
          "Check out our ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "underline", children: "Pro Service Plan" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 96,
            columnNumber: 31
          }, this),
          " for more details."
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg", children: "I need this plan" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-2 border-blue-500 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-blue-600 mb-4", children: "Manage My Suppliers" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 leading-relaxed mb-6", children: "If you prefer to use your own suppliers, we can collaborate with them and manage the entire purchasing process from production to quality inspection and door-to-door logistics. Our support will significantly enhance your sourcing efficiency." }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-blue-600 font-medium mb-6", children: [
          "Discover more details about our ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "underline", children: "Basic Service Plan" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 109,
            columnNumber: 49
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg", children: "I need this plan" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 111,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Submit Your Sourcing Request" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 max-w-2xl mx-auto leading-relaxed", children: "Fill out this form with your detailed needs and our customer support team will contact you shortly. We will assign a professional agent to follow up on your project and provide personalized assistance." }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 mt-4 text-sm", children: "If you encounter any issues with submission, you can also email us directly at Taisourcing@gmail.com." }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      submitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-50 border border-green-200 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 137,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-green-700 mb-2", children: "Thank You!" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 140,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-600", children: "Your request has been submitted successfully. Our team will contact you shortly." }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 134,
        columnNumber: 24
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "firstName", value: formData.firstName, onChange: handleChange, placeholder: "First Name*", required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 145,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 144,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "lastName", value: formData.lastName, onChange: handleChange, placeholder: "Last Name*", required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "Email*", required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 154,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 153,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleChange, placeholder: "Phone Number*", required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 157,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 156,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "country", value: formData.country, onChange: handleChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select your country*" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 164,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "US", children: "United States" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 165,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "CN", children: "China" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 166,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "DE", children: "Germany" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 167,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "UK", children: "United Kingdom" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 168,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "JP", children: "Japan" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 169,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 163,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "company", value: formData.company || "", onChange: handleChange, placeholder: "Company Name", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "message", value: formData.message, onChange: handleChange, placeholder: "Describe your sourcing needs...", rows: 4, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 178,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: submitting, className: "w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed", children: submitting ? "Submitting..." : "Submit Request" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 142,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/services.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(ServicesPage, "pc1Hn5X4jSms/kyZYEzQa2hEYRg=");
_c = ServicesPage;
var _c;
$RefreshReg$(_c, "ServicesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ServicesPage as default
};
//# sourceMappingURL=/build/routes/services-4UDFAHAZ.js.map

import {
  getSdk,
  print
} from "/build/_shared/chunk-FX3BUYEM.js";
import {
  API_URL
} from "/build/_shared/chunk-X7W7OFLF.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-CG66FP4Q.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:@remix-run/cloudflare
var require_cloudflare = __commonJS({
  "empty-module:@remix-run/cloudflare"(exports, module) {
    module.exports = {};
  }
});

// app/sessions.ts
init_remix_hmr();

// app/utils/platform-adapter.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\platform-adapter.ts"
  );
  import.meta.hot.lastModified = "1782487989628.9854";
}
var IS_CF_PAGES = typeof process === "undefined";
async function safeRequireNodeDependency(module) {
  return import(module.split("").join(""));
}

// app/sessions.ts
var import_cloudflare = __toESM(require_cloudflare(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\sessions.ts"
  );
  import.meta.hot.lastModified = "1782574979658.2246";
}
async function getCookieSessionStorageFactory() {
  if (IS_CF_PAGES) {
    return import_cloudflare.createCookieSessionStorage;
  } else {
    return safeRequireNodeDependency("@remix-run/node").then(
      (module) => module.createCookieSessionStorage
    );
  }
}
var sessionStorage;
async function getSessionStorage() {
  if (sessionStorage) {
    return sessionStorage;
  }
  const factory = await getCookieSessionStorageFactory();
  sessionStorage = factory({
    cookie: {
      name: "vendure_remix_session",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: ["awdbhbjahdbaw"],
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    }
  });
  return sessionStorage;
}

// app/graphqlWrapper.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\graphqlWrapper.ts"
  );
  import.meta.hot.lastModified = "1783417927758.789";
}
var AUTH_TOKEN_SESSION_KEY = "authToken";
async function sendQuery(options) {
  const headers = new Headers(options.headers);
  headers.append("Content-Type", "application/json");
  if (options.authToken) {
    headers.append("Authorization", `Bearer ${options.authToken}`);
  } else {
    const session = await getSessionStorage().then(
      (sessionStorage2) => sessionStorage2.getSession(options.request?.headers.get("Cookie"))
    );
    if (session) {
      const token = session.get(AUTH_TOKEN_SESSION_KEY);
      if (token) {
        headers.append("Authorization", `Bearer ${token}`);
      }
    }
  }
  return fetch("/api/shop-api", {
    method: "POST",
    body: JSON.stringify(options),
    headers
  }).then(async (res) => ({
    ...await res.json(),
    headers: res.headers
  }));
}
var baseSdk = getSdk(requester);
var sdk = baseSdk;
function requester(doc, vars, options) {
  return sendQuery({
    query: print(doc),
    variables: vars,
    ...options
  }).then(async (response) => {
    const token = response.headers.get("vendure-auth-token");
    const headers = {};
    if (token) {
      headers["x-vendure-auth-token"] = token;
    }
    headers["x-vendure-api-url"] = API_URL;
    if (response.errors) {
      console.log(
        response.errors[0].extensions?.exception?.stacktrace.join("\n") ?? response.errors
      );
      throw new Error(JSON.stringify(response.errors[0]));
    }
    return { ...response.data, _headers: new Headers(headers) };
  });
}

export {
  sdk
};
//# sourceMappingURL=/build/_shared/chunk-B2KXU3IN.js.map

import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-CG66FP4Q.js";

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

export {
  graphqlClient
};
//# sourceMappingURL=/build/_shared/chunk-L4DMO4TQ.js.map

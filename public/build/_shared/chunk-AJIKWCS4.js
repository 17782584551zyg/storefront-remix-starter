import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-CG66FP4Q.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/utils/use-toggle-state.tsx
init_remix_hmr();
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\use-toggle-state.tsx"
  );
  import.meta.hot.lastModified = "1782487989648.2527";
}
var useToggleState = (initialState = false) => {
  const [state, setState] = (0, import_react.useState)(initialState);
  const close = () => {
    setState(false);
  };
  const open = () => {
    setState(true);
  };
  const toggle = () => {
    setState((state2) => !state2);
  };
  const hookData = [state, open, close, toggle];
  hookData.state = state;
  hookData.open = open;
  hookData.close = close;
  hookData.toggle = toggle;
  return hookData;
};
var use_toggle_state_default = useToggleState;

export {
  use_toggle_state_default
};
//# sourceMappingURL=/build/_shared/chunk-AJIKWCS4.js.map

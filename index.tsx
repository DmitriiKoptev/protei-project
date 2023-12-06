import React from "react";
import { createRoot } from "react-dom/client";
import Hello from "./packages/module-hello-world/src/Hello";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);
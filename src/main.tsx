import React from "react";
import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

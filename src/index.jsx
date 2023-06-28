import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./Rotas";
import { GlobalStyle } from "./styles/Global.style.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Rotas />
    <GlobalStyle />
  </React.StrictMode>
);
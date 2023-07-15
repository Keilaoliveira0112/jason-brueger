import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import GlobalStyle from "./styles/Global.style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
    <GlobalStyle />
  </React.StrictMode>,
);

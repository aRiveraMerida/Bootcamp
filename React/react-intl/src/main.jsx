import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProviderLanguage from "./context/languageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderLanguage>
      <App date={Date.now()}/>
    </ProviderLanguage>
  </React.StrictMode>
);

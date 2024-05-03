import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App from "./App.css";
import Searchengine from "./Searchengine";
import Searchengine from "./Searchengine.css";

import reportWebVitals from "./reportWebVitals";
<header>
  <Searchengine />
  <Searchengine.css />
  <App />
  <App.css />
</header>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

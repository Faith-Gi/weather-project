import React from "react";
import logo from "./logo.svg";

import App from "./App";
import App from "./App.css";
import Searchengine from "./Searchengine";
import Searchengine from "./Searchengine.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Searchengine />
        <Searchengine.css />
        <App />
        <App.css />
      </header>
    </div>
  );
}

export default App;

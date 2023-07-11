import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css";
import Pruebacss from "./components/Pruebacss";
import Camara from "./components/Camara";
import ClickPrinting from "./components/ClickPrinting";
import Hook from "./components/Hook-App/Hook";
import "./custom.css";
import CounterApp from "./components/Hook-App/01-useState/CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GifExpertApp /> */}
    {/* <Pruebacss /> */}
    {/* <PruebaBou /> */}
    {/* <Camara /> */}
    {/* <ClickPrinting /> */}
    <Hook />
    <CounterApp />
  </React.StrictMode>
);

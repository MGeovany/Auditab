import React from "react";
import ReactDOM from "react-dom/client";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Features />
    <Services />
  </React.StrictMode>
);

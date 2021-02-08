import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./components/App";

import "./global.css";
const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);

ReactDOM.render(<App></App>, container);

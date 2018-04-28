import React from "react";
import { render } from "react-dom";
import './index.css';
import Fact from "./Fact.js";




const App = () => (
  <div>
    <h1>Kidz Who Kode </h1>
    <Fact />



  </div>
);

render(<App />, document.getElementById("root"));

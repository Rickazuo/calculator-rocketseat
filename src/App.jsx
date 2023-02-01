import { useState } from "react";
import "./App.css";

import CalculatorHeader from "./components/CalculatorHeader/CalculatorHeader";
import Calculator from "./components/calculator/calculator";

function App() {
  return (
    <div className="container">
      <Calculator />
    </div>
  );
}

export default App;

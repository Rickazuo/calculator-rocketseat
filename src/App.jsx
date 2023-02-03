import "./App.css";
import percent from "./assets/percent.png";
import divide from "./assets/divide.png";
import x from "./assets/x.png";
import minus from "./assets/minus.png";
import plus from "./assets/plus.png";
import plusMinus from "./assets/plusMinus.png";
import equals from "./assets/equals.png";

import Calculator from "./components/Calculator/Calculator";

const buttons = [
  [
    { value: "CE", styles: "cleanButton" },
    { value: "C" },
    { value: "%", tag: <img src={percent} width={28} /> },
    {
      value: "/",
      tag: <img src={divide} width={28} />,
      styles: "operationsButton",
    },
  ],
  [
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: "x", tag: <img src={x} />, styles: "operationsButton" },
  ],
  [
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: "-", tag: <img src={minus} />, styles: "operationsButton" },
  ],
  [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: "+", tag: <img src={plus} />, styles: "operationsButton" },
  ],
  [
    { value: "+/-", tag: <img src={plusMinus} /> },
    { value: 0 },
    { value: "," },
    { value: "=", tag: <img src={equals} />, styles: "equalButton" },
  ],
];

function App() {
  return (
    <div className="container">
      <Calculator buttons={buttons} />
    </div>
  );
}

export default App;

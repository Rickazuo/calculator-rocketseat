import "./App.css";
import percent from "./assets/percent.png";

import Calculator from "./components/Calculator/Calculator";

const buttons = [
  [
    { value: "CE" },
    { value: "C" },
    { value: "%", tag: <img src={percent} width={28} /> },
    { value: "/", tag: <img /> },
  ],
  [{ value: 7 }, { value: 8 }, { value: 9 }, { value: "x", tag: <img /> }],
  [{ value: 4 }, { value: 5 }, { value: 6 }, { value: "-", tag: <img /> }],
  [{ value: 1 }, { value: 2 }, { value: 3 }, { value: "+", tag: <img /> }],
  [
    { value: "+/-", tag: <img /> },
    { value: 0 },
    { value: "," },
    { value: "=", tag: <img /> },
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

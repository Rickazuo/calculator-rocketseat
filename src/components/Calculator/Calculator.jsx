import { useState } from "react";
import CalculatorHeader from "../CalculatorHeader/CalculatorHeader";
import Button from "../Button/Button";
import styles from "./styles.module.css";

const overFlow = 12;

export default function Calculator({ buttons }) {
  const [operations, setOperations] = useState([]);
  const [actualNumber, setActualNumber] = useState("");
  const [result, setResult] = useState(0);

  const digitedNumber = (value) => {
    setActualNumber(parseFloat(`${actualNumber}${value}`));
    setResult(parseFloat(`${actualNumber}${value}`));
  };

  console.log(operations);

  const addOperarations = (value) => {
    const newOperations = [...operations];
    if (typeof value === "string" && actualNumber !== null) {
      newOperations.push(actualNumber);
      newOperations.push(value);
      setOperations(newOperations);
      setActualNumber("");
    } else {
      digitedNumber(value);
    }
  };

  const calculate = (value) => {
    const newOperations = [];
  };
  // calculate(button.value)
  return (
    <div className={styles.calculator}>
      <CalculatorHeader operations={operations} result={result} />
      <main className={styles.rowsContainer}>
        {buttons.map((rows) => (
          <div className={styles.buttonsContainer}>
            {rows.map((button) => {
              return (
                <Button
                  styleName={button?.styles ? button.styles : undefined}
                  onClick={() => {
                    addOperarations(button.value);
                  }}
                >
                  {button?.tag ? button.tag : button.value}
                </Button>
              );
            })}
          </div>
        ))}
      </main>
    </div>
  );
}

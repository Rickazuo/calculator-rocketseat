import { useState, useEffect } from "react";
import CalculatorHeader from "../CalculatorHeader/CalculatorHeader";
import Button from "../Button/Button";
import styles from "./styles.module.css";

const overFlow = 15;
const numberOverflow = 1000000000;

export default function Calculator({ buttons }) {
  const [operations, setOperations] = useState([]);
  const [result, setResult] = useState("");

  const mathOptions = (element, operation, nextElement) => {
    const zeroDivision = element === 0 || nextElement === 0;

    switch (true) {
      case operation === "+":
        return element + nextElement;
      case operation === "-":
        return element - nextElement;
      case operation === "%":
        return element % nextElement;
      case operation === "x":
        return element * nextElement;
      case operation === "/":
        if (zeroDivision) return 0;
        return element / nextElement;
    }
  };

  const calculate = (operations) => {
    let resultArray = [...operations];
    let result;

    while (resultArray.length > 1) {
      result = mathOptions(resultArray[0], resultArray[1], resultArray[2]);
      resultArray.shift(); //removes from begin of the array
      resultArray.shift();
      resultArray.shift();
      resultArray.unshift(result); // add from begin of the array
    }

    return resultArray[0];
  };

  const calculatePercentual = (operations) => {
    let operationsResult;
    if (operations.length <= 3) {
      operationsResult = operations[0];
    } else {
      const percentageOperations = [...operations];
      percentageOperations.pop();
      percentageOperations.pop();
      operationsResult = calculate(percentageOperations);
    }
    const percentage = operationsResult * (result / 100);

    return mathOptions(
      percentage,
      operations[operations.length - 2],
      operationsResult
    );
  };

  const returnResult = (operation, operations) => {
    const minimumToCalculate = operations.length >= 3;
    let operationsResult;

    if (minimumToCalculate) {
      if (result && operation === "%") {
        operationsResult = calculatePercentual(operations);
      } else {
        operationsResult = calculate(operations);
      }
      setResult(operationsResult.toFixed(2));
      setOperations([]);
    }
  };

  const restrictionBeforeCalculate = (operation, operations) => {
    const cantUseOperation = result === "";

    switch (true) {
      case operation === "CE":
        setResult("");
        return true;
      case operation === "C":
        setResult("");
        setOperations([]);
        return true;
      case operation === "=":
        if(result === "") {
          alert("Before calculate you need add a number")
          return true
        }
        returnResult("=", operations);
        return true;
      case operation === "%":
        returnResult("%", operations);
        return true;
      case cantUseOperation:
        return true;
      case operations.length >= overFlow:
        alert("Overflow, to many operations");
        return true;
      case result > numberOverflow:
        alert("Overflow, number not supported");
        return true;
    }
  };

  const digitedNumber = (value) => {
    if (value === "+/-") {
      setResult(parseFloat(result) * -1);
    } else if (value === ",") {
      setResult(`${result}.`);
    } else {
      setResult(parseFloat(`${result}${value}`));
    }
  };

  const addOperarations = (value) => {
    const isAnOperation =
      typeof value === "string" && value !== "," && value !== "+/-";

    if (isAnOperation) {
      const stop = restrictionBeforeCalculate(value, [...operations, result]);
      if (stop) return;

      setOperations((prevOperations) => [
        ...prevOperations,
        result, //number to calculate
        value, //operation
      ]);

      setResult("");
    } else {
      digitedNumber(value);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      addOperarations("C");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [handleKeyPress]);

  return (
    <div className={styles.calculator}>
      <CalculatorHeader operations={operations} result={result} />
      <main className={styles.rowsContainer}>
        {buttons.map((rows, index) => (
          <div key={index} className={styles.buttonsContainer}>
            {rows.map((button) => {
              return (
                <Button
                  key={button.value}
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

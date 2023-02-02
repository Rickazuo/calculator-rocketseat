import { useState } from "react";
import CalculatorHeader from "../CalculatorHeader/CalculatorHeader";
import Button from "../Button/Button";
import styles from "./styles.module.css";

export default function Calculator({ buttons }) {
  const [operations, setOperations] = useState([]);

  return (
    <div className={styles.calculator}>
      <CalculatorHeader />
      <main className={styles.rowsContainer}>
        {buttons.map((rows) => (
          <div className={styles.buttonsContainer}>
            {rows.map((button) => {
              console.log(buttons);
              return <div>{button.value}</div>;
            })}
          </div>
        ))}
      </main>

      <Button>1</Button>
    </div>
  );
}

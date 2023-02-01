import CalculatorHeader from "../CalculatorHeader/CalculatorHeader";
import styles from "./styles.module.css";

export default function Calculator() {
  return (
    <div className={styles.calculator}>
      <CalculatorHeader />
    </div>
  );
}

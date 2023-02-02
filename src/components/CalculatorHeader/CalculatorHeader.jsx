import styles from "./styles.module.css";

const operations = ["1", "+", "1"];

export default function CalculatorHeader() {
  return (
    <header className={styles.headerCalculator}>
      <div className={styles.historic}>
        {operations.map((operation) => (
          <span>{operation}</span>
        ))}
      </div>
      <div className={styles.result}>
        <div className={styles.signal}>=</div>
        <div className={styles.value}>2</div>
      </div>
    </header>
  );
}

import styles from "./styles.module.css";

export default function CalculatorHeader({ operations, result }) {
  return (
    <header className={styles.headerCalculator}>
      <div className={styles.historic}>
        {operations.map((operation) => (
          <span>{operation}</span>
        ))}
      </div>
      <div className={styles.result}>
        <div className={styles.signal}>=</div>
        <div className={styles.value}>{result}</div>
      </div>
    </header>
  );
}

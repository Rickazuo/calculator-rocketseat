import styles from "./styles.module.css";

export default function Button({ children, styleName = "defaultButton" }) {
  return (
    <button className={`${styles.roundedButton} ${styles[styleName]}`}>
      {children}
    </button>
  );
}

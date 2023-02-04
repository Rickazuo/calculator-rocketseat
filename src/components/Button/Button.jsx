import styles from "./styles.module.css";

export default function Button({
    children,
    styleName = "defaultButton",
    onClick,
}) {
    return (
        <button
            className={`${styles.roundedButton} ${styles[styleName]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

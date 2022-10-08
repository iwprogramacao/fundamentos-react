import styles from "./Header.module.css";
import igniteSimbol from "../assets/igniteSimbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={igniteSimbol}
        alt="Logotipo do Ignite"
      />
      <strong>Ignite Feed</strong>
    </header>
  );
}

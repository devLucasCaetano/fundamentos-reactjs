import styles from "./Header.module.css";
import icon from "../../public/assets/icons/icon-blue-gray.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={icon} className={styles.icon} />
        <h1>Cyber Blog</h1>
      </div>
    </header>
  );
}

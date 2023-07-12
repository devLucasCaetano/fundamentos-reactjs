import styles from "./Sidebar.module.css";
import BgHeader from "../../public/assets/images/cover.png";
import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";
("phosphor-react");

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={BgHeader} className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src="https://github.com/devLucasCaetano.png" className={styles.avatar} />
        <strong className={styles.name}>Lucas Caetano</strong>
        <span className={styles.role}>Developer</span>
      </div>

      <footer>
        <a target="_blank">
          <PencilSimpleLine size={20} weight="bold" />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}

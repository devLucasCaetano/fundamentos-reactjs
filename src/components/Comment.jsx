import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>
        <img src="https://picsum.photos/seed/1/64/64" />
      </div>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Name</strong>
              <time
                title="Onze de julho às 16 horas"
                dateTime="2023-07-11 16:00:00"
              >
                Comentado há 1h
              </time>
            </div>
            <button title="Delete comment">
              <Trash size={24} weight="fill" />
            </button>
          </header>
          <p>Ya</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} weight="fill" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

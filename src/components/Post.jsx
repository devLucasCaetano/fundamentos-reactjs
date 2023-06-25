import styles from "./Post.module.css";

export function Post() {
  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img src="https://github.com/devLucasCaetano.png" />
            <div className={styles.authorInfo}>
              <strong className={styles.name}>Lucas Caetano</strong>
              <span className={styles.role}>Developer</span>
            </div>
          </div>
          <time title="25 de junho às 02:00h " dateTime="2023-06-25 02:00:00">
            Publicado há 1d
          </time>
        </header>

        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <p>
            <a href="https://devlucascaetano.com">
              https://devlucascaetano.com
            </a>
          </p>
          <p>
            <a>#segurança</a>
            <a>#tecnologia</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>
            <label htmlFor="comment">Deixe seu comentário:</label>
          </strong>

          <textarea
            id="comment"
            placeholder="deixe um comentário"
            name="comment"
          />

          <button type="submit">Enviar</button>
        </form>
      </article>
    </div>
  );
}

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="8 de outubro às 13h35min"
                dateTime="2022-10-08 13:35:23"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size="24" />
            </button>
          </header>
          <p>Muito bom, parabéns!</p>
          <footer>
            <button>
              <ThumbsUp /> Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

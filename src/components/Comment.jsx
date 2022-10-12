import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likesCount, setLikesCount] = useState(0);

  function handleLikeComment() {
    setLikesCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/diego3g.png"
      />
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
            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size="24" />
            </button>
          </header>
          <p>{content}</p>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp /> Aplaudir <span>{likesCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

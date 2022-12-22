import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment:(comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment () {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={style.Comment}>
      <Avatar hasBorder={false} src="https://github.com/caiohmg.png" alt="" />

      <div className={style.CommentBox}>
        <div className={style.CommentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Caio Henrique</strong>
              <time
                title="11 de Dezembro ás 22:00h"
                dateTime="2022-12-19 22:03:03"
              >
                Cerca de 1 hora atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

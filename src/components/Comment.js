import { useEffect } from "react";
import CommentContent from "./CommentContent";
import CommentScore from "./CommentScore";
import CommentUser from "./CommentUser";
import ReplyBtn from "./ReplyBtn";

function Comment({ comment, newComments, setMode }) {

  
  return (
    <div className="comment-box" data-id={comment.id}>
      <div className="comment-box-left">
        <CommentScore>{comment.score}</CommentScore>
      </div>
      <div className="comment-box-right">
        <div className="comment-box-top">
          <CommentUser
            profile={comment.user.image.png}
            name={comment.user.username}
            status={comment.createdAt}
          />
          <ReplyBtn />
        </div>
        <div className="comment-box-bottom">
          <CommentContent>{comment.content}</CommentContent>
        </div>
      </div>
    </div>
  );
}

export default Comment;

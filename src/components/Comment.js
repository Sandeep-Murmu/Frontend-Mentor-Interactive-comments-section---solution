import { useEffect } from "react";
import CommentContent from "./CommentContent";
import CommentScore from "./CommentScore";
import CommentUser from "./CommentUser";
import ReplyBtn from "./ReplyBtn";

function Comment({ comment }) {
  return (
    <>
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
      <div className="reply-section">
        {comment.replies &&
          comment.replies.length > 0 &&
          comment.replies.map((el, i) => <Comment comment={el} key={i} />)}
      </div>
    </>
  );
}

export default Comment;

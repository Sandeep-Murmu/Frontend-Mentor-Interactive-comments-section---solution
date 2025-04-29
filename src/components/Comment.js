import CommentScore from "./CommentScore";
import CommentUser from "./CommentUser";
import ReplyBtn from "./ReplyBtn";

function Comment({ comment }) {
  return (
    <div className="comment-box">
      <div className="comment-box-left">
        <CommentScore />
      </div>
      <div className="comment-box-right">
        <div className="comment-box-top">
          <CommentUser />
          <ReplyBtn />
        </div>
      </div>
    </div>
  );
}

export default Comment;

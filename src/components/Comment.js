import CommentScore from "./CommentScore";

function Comment({ comment }) {
  return (
    <div className="comment-box">
      <CommentScore />
    </div>
  );
}

export default Comment;

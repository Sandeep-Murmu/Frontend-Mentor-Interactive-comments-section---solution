import Comment from "./Comment";

function CommentItem({ comment }) {

  return (
    <>
      <div className="comment-main">
        <Comment comment={comment} />
      </div>
    </>
  );
}

export default CommentItem;

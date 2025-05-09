import Comment from "./Comment";

function CommentItem({ comment, user }) {
  return (
    <>
      <div className="comment-main">
        <Comment comment={comment} user={user} />
      </div>
    </>
  );
}

export default CommentItem;

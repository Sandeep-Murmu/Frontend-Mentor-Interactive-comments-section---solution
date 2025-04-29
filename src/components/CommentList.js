import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div className="comment-container">
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;

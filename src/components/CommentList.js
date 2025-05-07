import Comment from "./Comment";

function CommentList({ comments }) {
  return comments.map((comment, i) => (
    <div className="comment-main">
      <Comment key={i} comment={comment} />
    </div>
  ));
}

export default CommentList;

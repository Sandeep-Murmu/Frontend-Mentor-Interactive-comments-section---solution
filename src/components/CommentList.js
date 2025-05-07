import Comment from "./Comment";
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return comments.map((comment, i) => (
      <CommentItem key={i} comment={comment} />
  ));
}

export default CommentList;

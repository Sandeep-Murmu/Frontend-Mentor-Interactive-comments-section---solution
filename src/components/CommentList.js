import CommentItem from "./CommentItem";

function CommentList({ comments, user }) {
  return comments.map((comment, i) => (
    <CommentItem key={i} comment={comment} user={user} />
  ));
}

export default CommentList;

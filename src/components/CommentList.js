import CommentItem from "./CommentItem";

function CommentList({ comments, user, updateActiveReply, activeReply }) {
  return comments.map((comment, i) => (
    <CommentItem
      key={i}
      comment={comment}
      user={user}
      updateActiveReply={updateActiveReply}
      activeReply={activeReply}
    />
  ));
}

export default CommentList;

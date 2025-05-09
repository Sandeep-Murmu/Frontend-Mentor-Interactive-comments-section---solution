import Comment from "./Comment";

function CommentItem({ comment, user, updateActiveReply, activeReply }) {
  return (
    <>
      <div className="comment-main">
        <Comment
          comment={comment}
          user={user}
          updateActiveReply={updateActiveReply}
          activeReply={activeReply}
        />
      </div>
    </>
  );
}

export default CommentItem;

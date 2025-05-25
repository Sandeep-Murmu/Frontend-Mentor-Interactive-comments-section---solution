import Comment from "./Comment";

function CommentItem({
  comment,
  user,
  updateActiveReply,
  activeReply,
  idCount,
  setIdCount,
}) {
  return (
    <>
      <div className="comment-main">
        <Comment
          comment={comment}
          user={user}
          updateActiveReply={updateActiveReply}
          activeReply={activeReply}
          idCount={idCount}
          setIdCount={setIdCount}
        />
      </div>
    </>
  );
}

export default CommentItem;

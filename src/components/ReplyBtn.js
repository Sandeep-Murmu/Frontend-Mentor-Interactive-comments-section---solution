function ReplyBtn({ toggleReply }) {
  return (
    <button className="comment-reply-btn" onClick={() => toggleReply()}>
      <img src="../../images/icon-reply.svg" alt="reply" />
      <span>Reply</span>
    </button>
  );
}

export default ReplyBtn;

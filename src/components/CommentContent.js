function CommentContent({ replyTo, content }) {
  return (
    <p className="comment-content">
      <b className="reply-to">{replyTo}</b> {content}
    </p>
  );
}

export default CommentContent;

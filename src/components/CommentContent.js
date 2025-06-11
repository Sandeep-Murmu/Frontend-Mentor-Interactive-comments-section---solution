function CommentContent({ replyTo, content }) {
  return (
    <p className="comment-content comment-content-grid" >
      <b className="reply-to">{replyTo}</b> {content}
    </p>
  );
}

export default CommentContent;

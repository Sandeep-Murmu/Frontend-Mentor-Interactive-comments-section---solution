import { useState } from "react";

function ReplyInput({ replyTo }) {
  const [content, setContent] = useState(replyTo ? `@${replyTo} ` : "");

  return (
    <textarea
      className="reply-input"
      placeholder="Add a comment..."
      rows={4}
      value={content}
      onChange={(e) => setContent(e.target.value)}
      
    />
  );
}

export default ReplyInput;

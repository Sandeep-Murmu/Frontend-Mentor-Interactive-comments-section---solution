import { useEffect, useRef, useState } from "react";

function ReplyInput({ replyTo }) {
  const [content, setContent] = useState(replyTo ? `@${replyTo} ` : "");
  const replyTextRef = useRef(null);

  useEffect(function () {
    if (replyTextRef.current) {
      const len = replyTextRef.current.value.length;
      replyTextRef.current.focus();
      replyTextRef.current.setSelectionRange(len, len);
    }
  }, []);

  return (
    <textarea
      ref={replyTextRef}
      className="reply-input"
      placeholder="Add a comment..."
      rows={4}
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
}

export default ReplyInput;

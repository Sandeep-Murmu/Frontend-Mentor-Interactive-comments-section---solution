import { useEffect, useRef, useState } from "react";
import ReplyError from "./ReplyError";

function ReplyInput({ replyTo, content, setContent, error, level }) {
  // const [content, setContent] = useState(replyTo ? `@${replyTo} ` : "");
  const replyTextRef = useRef(null);

  useEffect(function () {
    if (replyTextRef.current) {
      const len = replyTextRef.current.value.length;
      replyTextRef.current.focus();
      replyTextRef.current.setSelectionRange(len, len);
    }
  }, []);

  return (
    <div className="reply-input-container">
      <textarea
        ref={replyTextRef}
        className={`reply-input ${error ? "reply-input-error" : ""}`}
        placeholder="Add a comment..."
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {error && <ReplyError level={level} />}
    </div>
  );
}

export default ReplyInput;

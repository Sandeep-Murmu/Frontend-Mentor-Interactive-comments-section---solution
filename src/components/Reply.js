import { useState } from "react";
import CommentUser from "./CommentUser";
import ReplyInput from "./ReplyInput";
import ReplySendBtn from "./ReplySendBtn";

function Reply({ user, replyTo, handleSubmit, replyOption = false , idCount, setIdCount}) {
  const [content, setContent] = useState(replyTo ? `@${replyTo} ` : "");

  function removeFirstWord(str) {
    if (!str) return;
    const strArr = str.trim().split(" ");
    strArr.shift();
    return strArr.join(" ");
  }

  function timeAgo(dateString) {
    const now = new Date();
    const created = new Date(dateString);
    const diff = Math.floor((now - created) / 1000); // in seconds

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(diff / interval.seconds);
      if (count > 0) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  }

  function handleSend() {
    setIdCount((id) => id + 1);
    const newComment = {
      id: idCount,
      content: replyOption ? removeFirstWord(content) : content,
      user,
      replyingTo: replyTo,
      createdAt: timeAgo(new Date().toISOString()),
      score: 0,
      replies: [],
    };
    handleSubmit(newComment);
    setContent("");
    console.log("new comment id: ", newComment.id);
  }
  return (
    <div className="comment-box comment-reply">
      <CommentUser profile={user.image.png} />
      <ReplyInput replyTo={replyTo} content={content} setContent={setContent} />
      <ReplySendBtn user={user} handleSend={handleSend} />
    </div>
  );
}

export default Reply;

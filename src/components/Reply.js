import { useState } from "react";
import CommentUser from "./CommentUser";
import ReplyInput from "./ReplyInput";
import ReplySendBtn from "./ReplySendBtn";

function Reply({ user, replyTo, handleSubmit, replyOption = false }) {
  const [content, setContent] = useState(replyTo ? `@${replyTo} ` : "");
  const [idCount, setIdCount] = useState(4);

  function removeFirstWord(str) {
    const strArr = str.split(" ");
    strArr.shift();
    return strArr.join(" ");
  }

  function handleSend() {
    setIdCount((id) => id + 1);
    const newComment = {
      id: idCount,
      content: replyOption ? removeFirstWord(content) : content,
      user,
      replyingTo: replyTo,
      createdAt: "1 week ago",
      score: 4,
      replies: [],
    };
    handleSubmit(newComment);
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

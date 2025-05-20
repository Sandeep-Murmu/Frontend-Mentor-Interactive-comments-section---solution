import { useState } from "react";
import CommentUser from "./CommentUser";
import ReplyInput from "./ReplyInput";
import ReplySendBtn from "./ReplySendBtn";

function Reply({ user, replyTo, handleSubmit }) {
  const [content, setContent] = useState(replyTo ? `@${replyTo} ` : "");

  function handleSend() {
    const newComment = {
      id: 6,
      content,
      createdAt: "1 week ago",
      score: 4,
      user,
      replies: [],
    };

    handleSubmit(newComment);

    console.log(user);
    console.log(content);
    console.log(newComment);
  }
  // console.log(user);
  return (
    <div className="comment-box comment-reply">
      <CommentUser profile={user.image.png} />
      <ReplyInput replyTo={replyTo} content={content} setContent={setContent} />
      <ReplySendBtn user={user} handleSend={handleSend} />
    </div>
  );
}

export default Reply;

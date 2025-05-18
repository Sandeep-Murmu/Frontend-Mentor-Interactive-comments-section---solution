import { useEffect, useState } from "react";
import CommentContent from "./CommentContent";
import CommentScore from "./CommentScore";
import CommentUser from "./CommentUser";
import Reply from "./Reply";
import ReplyBtn from "./ReplyBtn";

function Comment({ comment, user, updateActiveReply, activeReply }) {
  const [replyOption, setReplyOption] = useState(false);

  const handleReply = function () {
    setReplyOption((option) => !option);
    updateActiveReply(comment.id);
    console.log(comment.user.username);
  };

  useEffect(
    function () {
      if (comment.id !== activeReply) {
        setReplyOption(false);
      }
    },
    [activeReply]
  );

  return (
    <>
      <div className="comment-box" data-id={comment.id}>
        <div className="comment-box-left">
          <CommentScore>{comment.score}</CommentScore>
        </div>
        <div className="comment-box-right">
          <div className="comment-box-top">
            <CommentUser
              profile={comment.user.image.png}
              name={comment.user.username}
              status={comment.createdAt}
            />
            <ReplyBtn toggleReply={handleReply} />
          </div>
          <div className="comment-box-bottom">
            <CommentContent
              replyTo={comment.replyingTo ? `@${comment.replyingTo}` : ""}
              content={comment.content}
            />
          </div>
        </div>
      </div>
      <div className="reply-section">
        {comment.replies &&
          comment.replies.length > 0 &&
          comment.replies.map((el, i) => (
            <Comment
              comment={el}
              key={i}
              user={user}
              updateActiveReply={updateActiveReply}
              activeReply={activeReply}
            />
          ))}
      </div>

      {replyOption && comment.id === activeReply && (
        <Reply user={user} replyTo={comment.user.username} />
      )}
    </>
  );
}

export default Comment;

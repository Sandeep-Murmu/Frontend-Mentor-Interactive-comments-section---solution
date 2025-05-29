import { useEffect, useState } from "react";
import CommentContent from "./CommentContent";
import CommentScore from "./CommentScore";
import CommentUser from "./CommentUser";
import Reply from "./Reply";
import ReplyBtn from "./ReplyBtn";

function Comment({
  comment,
  user,
  updateActiveReply,
  activeReply,
  idCount,
  setIdCount,
}) {
  const [replyOption, setReplyOption] = useState(false);
  const [commentScore, setCommentScore] = useState(comment.score);
  const [vote, setVote] = useState(null);

  const handleReply = function () {
    setReplyOption((option) => !option);
    updateActiveReply(comment.id);
  };

  const handleAddReply = function (replyObj) {
    comment.replies = comment.replies
      ? [...comment.replies, replyObj]
      : [replyObj];

    setReplyOption(false);
  };

  const handleCommentScore = function (type) {
    if (type === "increament") {
      if (vote === "up") {
        setCommentScore((score) => score - 1);
        setVote(null);
      } else if (vote === "down") {
        setCommentScore((score) => score + 2);
        setVote("up");
      } else {
        setCommentScore((score) => score + 1);
        setVote("up");
      }
    } else if (type === "decreament") {
      if (vote === "down") {
        setCommentScore((score) => score + 1);
        setVote(null);
      } else if (vote === "up") {
        setCommentScore((score) => score - 2);
        setVote("down");
      } else {
        setCommentScore((score) => score - 1);
        setVote("down");
      }
    } else {
      console.log("incorrect score handle type");
    }
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
          <CommentScore vote={vote} scoreControl={handleCommentScore}>
            {commentScore}
          </CommentScore>
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
              idCount={idCount}
              setIdCount={setIdCount}
            />
          ))}
      </div>

      {replyOption && comment.id === activeReply && (
        <Reply
          user={user}
          replyTo={comment.user.username}
          handleSubmit={handleAddReply}
          replyOption={true}
          idCount={idCount}
          setIdCount={setIdCount}
          level="Reply"
        />
      )}
    </>
  );
}

export default Comment;

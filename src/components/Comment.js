import { useEffect, useState, useTransition } from "react";
import CommentContent from "./CommentContent";
import CommentScore from "./CommentScore";
import CommentUser from "./CommentUser";
import Reply from "./Reply";
import Button from "./Button";

function Comment({
  comment,
  user,
  updateActiveReply,
  activeReply,
  idCount,
  setIdCount,
  deleteComment,
}) {
  const [replyOption, setReplyOption] = useState(false);
  const [commentScore, setCommentScore] = useState(comment.score);
  const [commentContent, setCommentContent] = useState(comment.content);
  const [editOption, setEditOption] = useState(false);
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

  const submitEdit = function (content) {
    comment.content = content;
    setCommentContent(content);
    setEditOption(false);
  };

  return (
    <>
      {!editOption && (
        <div>
          <div className="comment-box">
            <div className="comment-box-left">
              <CommentScore vote={vote} scoreControl={handleCommentScore}>
                {commentScore}
              </CommentScore>
            </div>
            <CommentUser
              profile={comment.user.image.png}
              name={comment.user.username}
              status={comment.createdAt}
              currentUser={comment.user.username === user.username}
            />
            <div className="comment-button-container">
              {comment.user.username === user.username ? (
                <>
                  <Button
                    onClickFnc={() => deleteComment(comment.id)}
                    imgSrc="../../images/icon-delete.svg"
                    type="delete"
                  >
                    Delete
                  </Button>
                  <Button
                    onClickFnc={() => setEditOption(true)}
                    imgSrc="../../images/icon-edit.svg"
                    type="reply"
                  >
                    Edit
                  </Button>
                </>
              ) : (
                <Button
                  onClickFnc={handleReply}
                  imgSrc="../../images/icon-reply.svg"
                  type="reply"
                >
                  Reply
                </Button>
              )}
            </div>
            <CommentContent
              replyTo={comment.replyingTo ? `@${comment.replyingTo}` : ""}
              content={commentContent}
            />
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
                  deleteComment={deleteComment}
                />
              ))}
          </div>
        </div>
      )}
      {editOption && (
        <Reply
          user={user}
          replyEdit={true}
          currentReply={comment}
          submitEdit={submitEdit}
          replyTo={comment.replyingTo}
          level="Reply"
        />
      )}
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

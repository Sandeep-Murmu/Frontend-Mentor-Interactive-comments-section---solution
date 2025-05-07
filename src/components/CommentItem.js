import { useState } from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

function CommentItem({ comment, newComments }) {
  const replies = comment.replies;
  // console.log(replies);

  return (
    <>
      <div className="comment-main">
        <Comment comment={comment} newComments={newComments} />

        {/* {replies.length !== 0 && (
        <div className="reply-section">{<Comment comments={replies} />}</div>
        )} */}

        {/* {replies.length && (
          <div className="reply-section">
            {replies.map((el, i) => (
              <Comment comment={el} key={i} />
            ))}
          </div>
        )} */}
      </div>
    </>
  );
}

export default CommentItem;

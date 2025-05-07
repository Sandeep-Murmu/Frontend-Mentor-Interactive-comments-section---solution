import { useState } from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments }) {

  return comments.map((comment, i) => (
    <CommentItem
      key={i}
      comment={comment}
      // newComments={setCommentList}
    />
  ));
}

export default CommentList;

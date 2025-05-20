import data from "./data.json";
import CommentList from "./components/CommentList";
import { useState } from "react";
import Reply from "./components/Reply";
import CommentItem from "./components/CommentItem";

function App() {
  const [comments, setComments] = useState(data.comments);
  const [activeReply, setActiveReply] = useState(null);
  const user = data.currentUser;

  const handleActiveReply = function (id) {
    setActiveReply(id);
  };

  const handleAddComment = function (cmntObj) {
    setComments((comments) => [...comments, cmntObj]);
  };

  return (
    <div className="App">
      <div className="comment-container">
        {comments.map((comment, i) => (
          <CommentItem
            key={i}
            comment={comment}
            user={user}
            updateActiveReply={handleActiveReply}
            activeReply={activeReply}
          />
        ))}
        <Reply user={user} handleSubmit={handleAddComment} />
      </div>
    </div>
  );
}

export default App;

import data from "./data.json";
import { useState } from "react";
import Reply from "./components/Reply";
import CommentItem from "./components/CommentItem";

function App() {
  const [comments, setComments] = useState(data.comments);
  const [activeReply, setActiveReply] = useState(null);
  const [idCount, setIdCount] = useState(() => 4);
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
            idCount={idCount}
            setIdCount={setIdCount}
          />
        ))}
        <Reply
          user={user}
          handleSubmit={handleAddComment}
          idCount={idCount}
          setIdCount={setIdCount}
          level="Comment"
        />
      </div>
    </div>
  );
}

export default App;

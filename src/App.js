import data from "./data.json";
import { useState } from "react";
import Reply from "./components/Reply";
import Comment from "./components/Comment";

function App() {
  const [comments, setComments] = useState(data.comments);
  const [activeReply, setActiveReply] = useState(null);
  const [idCount, setIdCount] = useState(() => 5);
  const user = data.currentUser;

  const handleActiveReply = function (id) {
    setActiveReply(id);
  };

  const handleAddComment = function (cmntObj) {
    setComments((comments) => [...comments, cmntObj]);
  };

  const handleDeleteComment = function (targetId) {
    setComments((comments) =>
      comments
        .filter((comment) => comment.id !== targetId) // Remove top-level comment with id 4
        .map((comment) => ({
          ...comment,
          replies:
            comment.replies?.filter((reply) => reply.id !== targetId) || [], // Remove nested reply with id 4
        }))
    );
  };

  return (
    <div className="App">
      <div className="comment-container">
        {comments.map((comment, i) => (
          <Comment
            key={i}
            comment={comment}
            user={user}
            updateActiveReply={handleActiveReply}
            activeReply={activeReply}
            idCount={idCount}
            setIdCount={setIdCount}
            deleteComment={handleDeleteComment}
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

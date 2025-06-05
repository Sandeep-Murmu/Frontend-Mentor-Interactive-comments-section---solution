import data from "./data.json";
import { useEffect, useState } from "react";
import Reply from "./components/Reply";
import Comment from "./components/Comment";
import Popup from "./components/Popup";

function App() {
  const [comments, setComments] = useState(data.comments);
  const [activeReply, setActiveReply] = useState(null);
  const [idCount, setIdCount] = useState(() => 5);
  const [togglePopup, setTogglePopup] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);
  const [currentCommentId, setCurrentCommentId] = useState(null);
  const user = data.currentUser;

  const handleActiveReply = function (id) {
    setActiveReply(id);
  };

  const handleAddComment = function (cmntObj) {
    setComments((comments) => [...comments, cmntObj]);
  };

  const handleDeleteComment = function (targetId) {
    setCurrentCommentId(targetId);
    setTogglePopup(true);
  };

  useEffect(
    function () {
      if (deleteComment) {
        console.log(currentCommentId)
        setComments((comments) =>
          comments
            .filter((comment) => comment.id !== currentCommentId) // Remove top-level comment with id 4
            .map((comment) => ({
              ...comment,
              replies:
                comment.replies?.filter(
                  (reply) => reply.id !== currentCommentId
                ) || [], // Remove nested reply with id 4
            }))
        );
      }
      setTogglePopup(false);
      setDeleteComment(false);
    },
    [deleteComment]
  );

  return (
    <>
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
      {togglePopup && (
        <Popup
          popupOption="Delete Comment"
          popupContent="Are you sure want to delete this comment? This will remove the comment and can't be undone"
          deleteComment={setDeleteComment}
          togglePopup={setTogglePopup}
        />
      )}
    </>
  );
}

export default App;

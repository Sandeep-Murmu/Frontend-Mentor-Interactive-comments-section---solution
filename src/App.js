import data from "./data.json";
import CommentList from "./components/CommentList";
import { useState } from "react";
import Reply from "./components/Reply";

function App() {
  const [comments, setComments] = useState(data.comments);
  const user = data.currentUser;

  return (
    <div className="App">
      <div className="comment-container">
        <CommentList comments={comments} user={user} />
        <Reply user={user} />
      </div>
    </div>
  );
}

export default App;

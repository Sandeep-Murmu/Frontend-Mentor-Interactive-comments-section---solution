import data from "./data.json";
import CommentList from "./components/CommentList";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState(data.comments);

  return (
    <div className="App">
      <div className="comment-container">
        <CommentList comments={comments} />
      </div>
    </div>
  );
}

export default App;

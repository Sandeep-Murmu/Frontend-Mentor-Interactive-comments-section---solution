function CommentScore({ children }) {
  return (
    <>
      <div className="comment-score">
        <button className="score-increament">+</button>
        <span className="score">{children}</span>
        <button className="score-decreament">-</button>
      </div>
    </>
  );
}

export default CommentScore;

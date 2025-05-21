function CommentScore({ children, scoreControl, vote }) {
  return (
    <>
      <div className="comment-score">
        <button
          className={`score-control score-increament ${
            vote === "up" ? "active" : ""
          }`}
          onClick={() => scoreControl("increament")}
        >
          +
        </button>
        <span className="score">{children}</span>
        <button
          className={`score-control score-decreament ${
            vote === "down" ? "active" : ""
          }`}
          onClick={() => scoreControl("decreament")}
        >
          -
        </button>
      </div>
    </>
  );
}

export default CommentScore;

function CommentUser({ profile, name, status, currentUser = false }) {
  return (
    <div className="user-info">
      <img
        className="user-profile-img"
        src={`../.${profile}`}
        alt="profile-img"
      />
      <span className="user-profile-name">{name}</span>
      {currentUser && (
        <span className="user-profile-tag">{currentUser ? "you" : ""}</span>
      )}
      <span className="user-profile-status">{status}</span>
    </div>
  );
}

export default CommentUser;

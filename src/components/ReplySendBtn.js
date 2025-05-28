function ReplySendBtn({ user, handleSend, children }) {
  return (
    <button className="reply-send-btn" onClick={handleSend}>
      {children}
    </button>
  );
}

export default ReplySendBtn;

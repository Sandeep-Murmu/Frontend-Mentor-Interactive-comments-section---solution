function ReplySendBtn({ user, handleSend }) {


  return (
    <button className="reply-send-btn" onClick={handleSend}>
      Send
    </button>
  );
}

export default ReplySendBtn;

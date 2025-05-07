import CommentUser from "./CommentUser";
import ReplyInput from "./ReplyInput";
import ReplySendBtn from "./ReplySendBtn";

function Reply({ user }) {
  console.log(user);
  return (
    <div className="comment-box comment-reply">
      <CommentUser profile={user.image.png} />
      <ReplyInput />
      <ReplySendBtn />
    </div>
  );
}

export default Reply;

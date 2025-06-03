function Button({ onClickFnc = () => {}, imgSrc, children, type }) {
  return (
    <button className={`comment-${type}-btn comment-btn`} onClick={onClickFnc}>
      <img src={imgSrc} alt={children} />
      <span>{children}</span>
    </button>
  );
}

export default Button;

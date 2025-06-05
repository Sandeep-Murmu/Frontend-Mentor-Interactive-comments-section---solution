function PopupButton({ children, type, onClickFnc = () => {} }) {
  return (
    <button className={`popup-${type}-btn popup-btn`} onClick={onClickFnc}>
      <span>{children}</span>
    </button>
  );
}

export default PopupButton;

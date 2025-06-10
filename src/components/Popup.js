import PopupButton from "./PopupButton";

function Popup({ popupOption, popupContent, deleteComment, togglePopup }) {
  return (
    <div className="popup-container">
      <div className="popup-box">
        <h2 className="popup-heading">{popupOption}</h2>
        <p className="popup-content">{popupContent}</p>
        <div className="popup-button-container">
          <PopupButton type="no" onClickFnc={() => togglePopup(false)}>
            No, Cancel
          </PopupButton>
          <PopupButton type="yes" onClickFnc={deleteComment}>
            Yes, Delete
          </PopupButton>
        </div>
      </div>
    </div>
  );
}

export default Popup;

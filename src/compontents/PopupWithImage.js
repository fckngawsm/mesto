import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__photo-image");
    this._description = this._popup.querySelector(".popup__description-image");
  }

  open(name, link) {
    this._image.src = link;
    this._description.alt = name;
    this._description.textContent = name;
    super.open();
  }
}

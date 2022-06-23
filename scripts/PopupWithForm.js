import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector,{handleFormSubmit}){
      super(popupSelector);
      this._formSubmit = handleFormSubmit;
      this._inputList = this._popup.querySelectorAll('.popup__text');
      this._formList = this._popup.querySelectorAll('.popup__form');
      this._submitButton = this._popup.querySelector(".popup__submit-btn");
    }

    close() {
      super.close();
      this._formList.reset();
    }

    _getInputValues() {
      this._formValues = {};

      this._inputList.forEach((input) => {
        this._formValues[input.name] = input.value;
      });

      return this._formValues;
    }

    setEventListeners() {
      super.setEventListeners();
      this._formList.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._formSubmit(this._getInputValues());
      });
    }
}
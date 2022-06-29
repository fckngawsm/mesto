import { validationSettings } from "../pages/index.js";
// работа с классом
class FormValidator {
  constructor(validationSettings, formElement) {
    this._form = formElement;
    this._submit = formElement.querySelector(validationSettings.submitButtonSelector);
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
    this._formfield = validationSettings._formSelector;

    this._inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
  }

  _showInputError(input, errorMessage) {
    const error = this._form.querySelector(`#${input.id}_error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._errorClass);

  }

  _hideInputError(input) {
    const error = this._form.querySelector(`#${input.id}_error`);
    input.classList.remove(this._inputErrorClass);
    error.classList.remove(this._errorClass);
    error.textContent = '';
  }


  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => !input.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableSubmitButton()
    } else {
      this._submit.removeAttribute("disabled");
      this._submit.classList.remove(this._inactiveButtonClass);
    }
  }

  disableSubmitButton(){
    this._submit.classList.add(this._inactiveButtonClass);
    this._submit.disabled = true;
  }

  _setEventListeners(){
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation(){
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}

export {FormValidator}
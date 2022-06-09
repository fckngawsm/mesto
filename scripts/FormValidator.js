const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_text_error',
  errorClass: 'popup__error_visibility',
}

class FormValidator {
  constructor(validationSettings, formElement) {
    this._form = formElement;
    this._submit = formElement.querySelector(validationSettings.submitButtonSelector);
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
    this._inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
    this._formfield = validationSettings._formSelector;
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

  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._submit.setAttribute("disabled", true);
      this._submit.classList.add(this._inactiveButtonClass);
    } else {
      this._submit.removeAttribute("disabled");
      this._submit.classList.remove(this._inactiveButtonClass);
    }
  }

  // enableSubmitButton(buttonSubmit){
  //   buttonSubmit.classList.remove(this._inactiveButtonClass);
  //   buttonSubmit.disabled = false;
  // }

  disableSubmitButton(buttonSubmit){
    buttonSubmit.classList.add(this._inactiveButtonClass);
    buttonSubmit.disabled = true;
  }

  _setEventListeners(){
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this.toggleButtonState();
      });
    });
  }

  enableValidation(){
    this._formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
    this._formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
    });
    this._setEventListeners();
  };
}

const formPopupEdit = document.querySelector('.popup-edit__form');
const formPopupAdd = document.querySelector('.popup-add__form');

const validatorEditProfile = new FormValidator(validationSettings , formPopupEdit);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validationSettings, formPopupAdd);
validatorAddCard.enableValidation();

export {validatorAddCard , validatorEditProfile , validationSettings , FormValidator ,formPopupEdit , formPopupAdd}
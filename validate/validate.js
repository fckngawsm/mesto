// функции для показа ошибок
const activedError = (formElement , inputElement, errorMessage, options) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}_error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
};

const unActivedError = (formElement , inputElement, options) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}_error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = '';
};

const validate = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
      activedError(formElement, inputElement, inputElement.validationMessage, options);
  } else {
      unActivedError(formElement, inputElement, options);
  }
};

// функция для смены кнопки
const toggleButtonState = (inputList, buttonElement, options) => {
    if (hasInvalidInput(inputList, options)) {
      buttonElement.classList.add(options.inactiveButtonClass);
      buttonElement.disabled = 'disabled';
    } else {
      buttonElement.classList.remove(options.inactiveButtonClass);
      buttonElement.disabled = '';
    }
};

const setEventListeners = (formElement, options) => {

    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.querySelector(options.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, options);

    inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {

        validate(formElement, inputElement, options);
        toggleButtonState(inputList, buttonElement, options);
      });
    });
};

const enableValidation = (options) => {

    const formList = Array.from(document.querySelectorAll(options.formSelector));

    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, options);
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
};

// функция для проверки валидации
// function handleValidate(evt) {
//     validate(evt.target);
//     unActivedError(evt.target);
// }

//
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_text_error',
  errorClass: 'popup__error_visibility'
});



 // Показать текст ошибки
 const showInputError = (formElement, inputElement, errorMessage, config) => {

    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
// скрыть текст ошибки
  const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);

    errorElement.textContent = '';
  };
// Проверка на валидность
  const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {

      hideInputError(formElement, inputElement, config);
    }
  };


// Добавление полей ошибок всем полям
  const setEventListeners = (formElement, config) => {

    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {

        isValid(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  };
  // Перебор всех форм
  const enableValidation = (config) => {

    const formList = Array.from(document.querySelectorAll(config.formSelector));


    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, config);
    });
  };
  // Функция принимает массив полей
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

// Проверка состояния кнопки
  const toggleButtonState = (inputList, buttonElement, config) => {

    if (hasInvalidInput(inputList, config)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = 'disabled';
    } else {

      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = '';
    }
  };

// Конфиг
  enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_error',
    errorClass: 'error_active'
  });


const profileButton = document.querySelector('.profile__button');
const popupEdit = document.querySelector('.popup-edit');
const profileAvatar = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle')
const popupAuthor = document.querySelector('.popup__text_author');
const popupCharacteristic = document.querySelector('.popup__text_characteristic');
const popupEditButtonClose = document.querySelector('.popup-edit__button-close');
const popupEditForm = document.querySelector('.popup-edit__container');
const buttonSetCards = document.querySelector('.button');
const popupCards = document.querySelector('.popup-cards');
const popurCardsForm = document.querySelector('.popup-cards__container');
const popupCardsButtonClose = document.querySelector('.popup-cards__button-close');
const elementsCards = document.querySelector('.elements');
const templateCards = document.querySelector('#card');
const newCardsElementName = document.querySelector('.popup-cards__name');
const newCardsElementImg = document.querySelector('.popup-cards__url');
const poopImg = document.querySelector('.popup-img');
const poopImgCon = document.querySelector('.popup-img__content');
const poopImgTitle = document.querySelector('.popup-img__title');
const poopImgButtonClosed = document.querySelector('.popup-img__button-close');


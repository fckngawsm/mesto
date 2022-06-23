// импорт
import {FormValidator} from "./FormValidator.js";
import Card from "./Сard.js";
import { initialCards } from "./initialCards.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
// переменные
const popupProfile = document.querySelector('.popup_type_profile');
const popups = document.querySelectorAll('.popup')
const popupAdd = document.querySelector('.popup_type_add')
const popupOpenEditButton = document.querySelector('.profile__edit-button');
const popupOpenAddButton = document.querySelector('.profile__add-button')
const popupCloseEditButton = popupProfile.querySelector ('.popup__close-edit');
const popupCloseAddButton = popupAdd.querySelector ('.popup__close-add');
const formElements = popupProfile.querySelector('.popup__form');
const nameInput = formElements.querySelector('.popup__text_type_name');
const jobInput = formElements.querySelector('.popup__text_type_status');
const profileName = document.querySelector ('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const cardElements = document.querySelector('.elements');
const inputTitle = document.getElementById('title-input');
const inputSource = document.getElementById('source-input');
const buttonCloseImage = document.querySelector('.popup__close-image');
const popupImage = document.querySelector('.popup_type_image');
const formPopupEdit = document.querySelector('.popup__form-edit');
const formPopupAdd = document.querySelector('.popup__form-add');
export const popupImageContent = document.querySelector('.popup__photo-image');
export const popupImageDescription = document.querySelector('.popup__description-image');
export const openedClass = document.querySelector('.popup_is-opened');
// объект настроек
export const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_text_error',
    errorClass: 'popup__error_visibility',
}
// Экземпляры класса
// валдиация
const validatorEditProfile = new FormValidator(validationSettings , formPopupEdit);
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(validationSettings, formPopupAdd);
validatorAddCard.enableValidation();
// класса
const imageOpen = new PopupWithImage('.popup_type_image');
imageOpen.setEventListeners();

export function createCard(item) {
  const card = new Card ({
    data:item,
    handleCardClick :(name , link ) => {
      imageOpen.open(name , link)
    },
},'.template-element');
  const cardElement = card.generateInititalItem();
  return cardElement;
}

const defaultCards = new Section({
  items:initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    defaultCards.addItem(cardElement);
  },
  },
'.elements'
);

defaultCards.renderItems();


// попапы

// const profileEdit = new PopupWithForm ('.popup_type_profile' ,
//     {
//       handleFormSubmit: (data) => {
//         profileEdit.setUserInfo(data);
//       },
//     },
// );
// profileEdit.renderCards();

// popups.forEach((evt) => {
//     evt.addEventListener('mousedown',closePopupOverlay)
// })

// function closePopupOverlay (evt) {
//     if(evt.target === popupOpen){
//         closePopup(popupOpen);
//     };
// }
// открытие попапа экземпляр
// function openPopup(popupProfile){
//     popupProfile.classList.add('popup_is-opened');
//     document.addEventListener('keydown',handleEscClose);
// };

// function closePopup(popupProfile){
//     popupProfile.classList.remove('popup_is-opened');
//     document.removeEventListener('keydown',handleEscClose);
// };


// Функции для отправления формы
// function submitFormHandler (evt) {
//     evt.preventDefault();
//     profileName.textContent = nameInput.value;
//     profileStatus.textContent = jobInput.value;
//     closePopup(popupProfile)
// };

// const submitHandlerAddSourceForm = (evt) => {
//     evt.preventDefault();
//     defaultCardList({link:inputSource.value , name:inputTitle.value});
//     inputSource.value = '';
//     inputTitle.value = '';
//     closePopup(popupAdd);

// };





// События
// formElements.addEventListener('submit', handleFormSubmit());

popupOpenEditButton.addEventListener("click", () => {
    const { name, info } = data.getUserInfo();
    nameInput.value = name;
    jobInput.value = info;
    profileEdit.open();
});
popupCloseEditButton.addEventListener('click',() => open(popupProfile));
//
// formPopupAdd.addEventListener('submit', handleFormSubmit());
popupOpenAddButton.addEventListener('click', () => {
    open(popupAdd)
    validatorAddCard.disableSubmitButton()
});
popupCloseAddButton.addEventListener('click', () => {
    close(popupAdd)
});
//
buttonCloseImage.addEventListener('click', () => imageOpen.close());


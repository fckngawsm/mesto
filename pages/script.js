// импорт
import {FormValidator} from "../compontents/FormValidator.js";
import Card from "../compontents/Сard.js";
import { initialCards } from "../compontents/initialCards.js";
import Section from "../compontents/Section.js";
import Popup from "../compontents/Popup.js";
import PopupWithImage from "../compontents/PopupWithImage.js";
import PopupWithForm from "../compontents/PopupWithForm.js";
import UserInfo from "../compontents/UserInfo.js";
// переменные
const popupProfile = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_add')
const popupOpenEditButton = document.querySelector('.profile__edit-button');
const popupOpenAddButton = document.querySelector('.profile__add-button')
const popupCloseEditButton = popupProfile.querySelector ('.popup__close-edit');
const popupCloseAddButton = popupAdd.querySelector ('.popup__close-add');
const formElements = popupProfile.querySelector('.popup__form');
const nameInput = formElements.querySelector('.popup__text_type_name');
const jobInput = formElements.querySelector('.popup__text_type_status');
const inputTitle = document.getElementById('title-input');
const inputSource = document.getElementById('source-input');
const buttonCloseImage = document.querySelector('.popup__close-image');
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
// Создание карточки
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
// рендер карточки
function renderCard(userCardData){
  const newCardElement = createCard(userCardData);
  defaultCards.addItem(newCardElement)
}
// экземпеляр секции
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
// экземпляр userinfo
const profile = new UserInfo({
  selectorName: '.profile__name',
  selectorInfo: '.profile__status'
})

// попапы
const popupEditProfile = new PopupWithForm(
  '.popup_type_profile',
  {
    submit: (obj) => {
       profile.setUserInfo({name: obj['name'], info: obj['ocean-explorer']});
       popupEditProfile.close()
    }
  }
);
popupEditProfile.setEventListeners()


const popupAddImage = new PopupWithForm(
  '.popup_type_add',
  {
    submit: () => {
      renderCard({name:inputTitle.value , link:inputSource.value});
      popupAddImage.close();
    },
  }
);
popupAddImage.setEventListeners()


// для экземпляра профиля
function editProfile(){
  const UserInfo = profile.getUserInfo();
  nameInput.value = UserInfo.name;
  jobInput.value = UserInfo.info;
}

// События
//
popupOpenEditButton.addEventListener("click", () => {
    editProfile();
    popupEditProfile.open();
});
popupCloseEditButton.addEventListener('click',() => popupEditProfile.close);
//
popupOpenAddButton.addEventListener('click', () => {
    popupAddImage.open()
    validatorAddCard.disableSubmitButton()
});
//
popupCloseAddButton.addEventListener('click', () => {
    close(popupAdd)
});
//
buttonCloseImage.addEventListener('click', () => imageOpen.close());

// импорт
import "./index.css";
import {FormValidator} from "../compontents/FormValidator.js";
import Card from "../compontents/Сard.js";
import Section from "../compontents/Section.js";
import Popup from "../compontents/Popup.js";
import PopupWithImage from "../compontents/PopupWithImage.js";
import PopupWithForm from "../compontents/PopupWithForm.js";
import UserInfo from "../compontents/UserInfo.js";
import {
  popupProfile,
  popupAdd,
  popupOpenEditButton,
  popupOpenAddButton,
  popupCloseEditButton,
  popupCloseAddButton,
  formElements,
  nameInput,
  jobInput,
  inputTitle,
  inputSource,
  buttonCloseImage,
  formPopupAdd,
  formPopupEdit,
  popupImageContent,
  popupImageDescription,
  openedClass,
  validationSettings,
  initialCards
} from "../utils/constants";
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
    submit: (obj) => {
      renderCard({name: obj['title'] , link: obj['source']});
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
    popupAddImage.close();
});
//
buttonCloseImage.addEventListener('click', () => imageOpen.close());

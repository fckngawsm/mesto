// импорт
import {FormValidator} from "./FormValidator.js";
import { Card } from "./Сard.js";
import { initialCards } from "./initialCards.js";
// переменные
const popupProfile = document.querySelector('.popup_profile');
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
const popupImage = document.querySelector('.popup-image');
const formPopupEdit = document.querySelector('.popup__form-edit');
const formPopupAdd = document.querySelector('.popup__form-add');
export const _popupImageContent = document.querySelector('.popup-image__photo');
export const _popupImageDescription = document.querySelector('.popup-image__description');
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
function createCard(initialItem) {
    const card = new Card (initialItem, '.template-element');
    const cardElement = card.generateInititalItem()

    return cardElement
}

function renderCard(initialItem) {
    const element = createCard(initialItem);
    cardElements.prepend(element);
}

initialCards.forEach(initialItem => {
    renderCard(initialItem);
});

// функции для открытия и закрытия "попапа"

const handleEscClose = (evt) => {
    if (evt.key === "Escape"){
        const popupOpen = document.querySelector('.popup_is-opened');
        closePopup(popupOpen)
    }
};

popups.forEach((evt) => {
    evt.addEventListener('mousedown',closePopupOverlay)
})

function closePopupOverlay (evt) {
    const popupOpen = document.querySelector('.popup_is-opened');
    if(evt.target === popupOpen){
        closePopup(popupOpen);
    };
}

export function handleCardClick() {
    openPopup(popupImage)
}

function openPopup(popupProfile){
    popupProfile.classList.add('popup_is-opened');
    document.addEventListener('keydown',handleEscClose);
};

function closePopup(popupProfile){
    popupProfile.classList.remove('popup_is-opened');
    document.removeEventListener('keydown',handleEscClose);
};



// Функции для отправления формы
function submitFormHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopup(popupProfile)
};

const submitHandlerAddSourceForm = (evt) => {
    evt.preventDefault();
    renderCard({link:inputSource.value , name:inputTitle.value});
    inputSource.value = '';
    inputTitle.value = '';
    closePopup(popupAdd);

};
;
// События
formElements.addEventListener('submit', submitFormHandler);
popupOpenEditButton.addEventListener('click',() => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
    openPopup(popupProfile);
});
popupCloseEditButton.addEventListener('click',() => closePopup(popupProfile));
//
formPopupAdd.addEventListener('submit', submitHandlerAddSourceForm);
popupOpenAddButton.addEventListener('click', () => {
    openPopup(popupAdd);
    validatorAddCard.disableSubmitButton()
});
popupCloseAddButton.addEventListener('click', () => {
    closePopup(popupAdd);
});
//
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));












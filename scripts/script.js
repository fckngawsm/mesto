// переменные
const popupProfile = document.querySelector('.popup_profile');
const popups = document.querySelectorAll('.popup')
const popupAdd = document.querySelector('.popup-add')
const popupOpenEditButton = document.querySelector('.profile__edit-button');
const popupOpenAddButton = document.querySelector('.profile__add-button')
const popupCloseEditButton = popupProfile.querySelector ('.popup__close-edit');
const popupCloseAddButton = popupAdd.querySelector ('.popup__close-add');
const formElements = popupProfile.querySelector('.popup__form');
const nameInput = formElements.querySelector('.popup__text_type_name');
const jobInput = formElements.querySelector('.popup__text_type_status');
const profileName = document.querySelector ('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const elements = document.querySelector('.elements');
const inputTitle = document.getElementById('title-input');
const inputSource = document.getElementById('source-input');
const buttonCloseImage = document.querySelector('.popup__close-image');
const popupImage = document.querySelector('.popup-image');

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

    addElement({link:inputSource.value , name:inputTitle.value});
    inputSource.value = '';
    inputTitle.value = '';
    closePopup(popupAdd);
};
//
function disableSubmitButton (validationSettings,buttonSubmit){
    buttonSubmit.classList.add(validationSettings.inactiveButtonClass);
    buttonSubmit.disabled = true;
}
// События
formElements.addEventListener('submit', submitFormHandler);
popupOpenEditButton.addEventListener('click',() => {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
});
popupCloseEditButton.addEventListener('click',() => closePopup(popupProfile));
//
formPopupAdd.addEventListener('submit', submitHandlerAddSourceForm);
popupOpenAddButton.addEventListener('click', () => {
    openPopup(popupAdd);
    const buttonSubmit = popupAdd.querySelector(validationSettings.submitButtonSelector);
    disableSubmitButton(validationSettings, buttonSubmit);
});
popupCloseAddButton.addEventListener('click', () => {
    closePopup(popupAdd);
});
//
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));

import {validatorAddCard , validatorEditProfile , validationSettings , FormValidator , formPopupAdd} from "./FormValidator.js";
import { Card , initialCards , addElement} from "./Сard.js";









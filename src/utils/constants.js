export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAdd = document.querySelector('.popup_type_add');
export const popupOpenEditButton = document.querySelector('.profile__edit-button');
export const popupOpenAddButton = document.querySelector('.profile__add-button')
export const popupCloseEditButton = popupProfile.querySelector ('.popup__close-edit');
export const popupCloseAddButton = popupAdd.querySelector ('.popup__close-add');
export const formElements = popupProfile.querySelector('.popup__form');
export const nameInput = formElements.querySelector('.popup__text_type_name');
export const jobInput = formElements.querySelector('.popup__text_type_status');
export const inputTitle = document.getElementById('title-input');
export const inputSource = document.getElementById('source-input');
export const buttonCloseImage = document.querySelector('.popup__close-image');
export const formPopupEdit = document.querySelector('.popup__form-edit');
export const formPopupAdd = document.querySelector('.popup__form-add');
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
export const initialCards = [
    {
        name: 'Зандам',
        link: 'https://images.unsplash.com/photo-1641300817800-5d46fd2aeeb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        alt: 'Зандам',
    },
    {
        name: 'Берн',
        link: 'https://images.unsplash.com/photo-1610734287146-94cb52a72718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        alt: 'Берн',
    },
    {
      name: 'Вашингтон',
      link: 'https://images.unsplash.com/photo-1562714529-94d65989df68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      alt: 'Вашингтон',
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      alt: 'Камчатка',
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Холмогорский район',
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      alt: 'Байкал',
    },
];
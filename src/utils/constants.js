export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAdd = document.querySelector('.popup_type_add');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const popupOpenEditButton = document.querySelector('.profile__edit-button');
export const popupOpenAddButton = document.querySelector('.profile__add-button')
export const popupOpenChangeAvatar = document.querySelector('.profile__edit_avatar')
export const popupCloseEditButton = popupProfile.querySelector ('.popup__close-edit');
export const popupCloseAddButton = popupAdd.querySelector ('.popup__close-add');
export const popupCloseChangeAvatar = popupAvatar.querySelector('.popup__close-avatar');
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
export const buttonEditAvatar = document.querySelector('.profile__edit_avatar');
export const popupCloseAvatar = document.querySelector('.popup__close-avatar');
export const formPopupAvatar = document.querySelector('.popup__form-avatar');
export const popupCloseConfirm = document.querySelector('.popup__close-delete')
// объект настроек
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_text_error',
  errorClass: 'popup__error_visibility',
}

// можно это уже удалить?
export const initialCards = [];
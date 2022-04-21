let popup = document.querySelector ('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector ('.popup__close');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_type-name');
let jobInput = formElement.querySelector('.popup__text_type-status');
let profileName = document.querySelector ('.profile__name');
let profileStatus = document.querySelector('.profile__status');

function openPopupAdd(){
    popup.classList.add('popup_is-opened');
}

function closePopupRemove(){
    popup.classList.remove('popup_is-opened')
}
closePopupButton.addEventListener('click', closePopupRemove);

// Функция для отправления формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopupRemove()
}

formElement.addEventListener('submit', formSubmitHandler);
openPopupButton.addEventListener('click', openPopupAdd);







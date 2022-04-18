let popup = document.querySelector ('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector ('.popup__close');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__type-name');
let jobInput = formElement.querySelector('.popup__type-status');
let buttonChange = popup.querySelector('.popup__submit-btn');
let profileName = document.querySelector ('.profile__name');
let profileStatus = document.querySelector('.profile__status');

function popupOpenToggle(){
    popup.classList.toggle('popup__is-opened');
}

openPopupButton.addEventListener('click', popupOpenToggle);
closePopupButton.addEventListener('click', popupOpenToggle);
buttonChange.addEventListener('click', popupOpenToggle);

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);





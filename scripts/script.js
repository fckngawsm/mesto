let popup = document.querySelector ('.popup');
let popupAdd = document.querySelector('.popup-add')
let openPopupButton = document.querySelector('.profile__edit-button');
let openPopupAddButton = document.querySelector('.profile__add-button')
let closePopupButton = popup.querySelector ('.popup__close');
let closePopupAddButton = popupAdd.querySelector ('.popup__close');
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_status');
let profileName = document.querySelector ('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let elements = document.querySelector('.elements');


function openPopupAdd(){
    popup.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
}

function closePopupRemove(){
    popup.classList.remove('popup_is-opened')
}

function openPopupAddPhoto(){
    popupAdd.classList.add('popup_is-opened');
}

function closePopupAddPhoto(){
    popupAdd.classList.remove('popup_is-opened')
}

// Функция для отправления формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;

    closePopupRemove()
}

// Работа с добавлением элементов

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область',
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Иваново',
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
    },{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз',
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область',
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Иваново',
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
    }
];

const addElement = (initialCards) => {
    elements.insertAdjacentHTML('afterbegin',
    `
                <div class="element">
                    <img class="element__image"
                        src="${initialCards.link}"
                        alt="${initialCards.alt}">
                    <div class="element__info">
                        <h2 class="element__title">
                            ${initialCards.name}
                        </h2>
                        <button class="element__like" type="button">
                        </button>
                  </div>
                </div>
    `);
};

initialCards.forEach((initialCards) => {
    addElement(initialCards);
});

// События
formElement.addEventListener('submit', formSubmitHandler);
openPopupButton.addEventListener('click', openPopupAdd);
closePopupButton.addEventListener('click', closePopupRemove);
// для add
openPopupAddButton.addEventListener('click',openPopupAddPhoto);
closePopupAddButton.addEventListener('click',closePopupAddPhoto)







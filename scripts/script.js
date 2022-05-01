// переменные
const popup = document.querySelector ('.popup');
const popupAdd = document.querySelector('.popup-add')
const openPopupButton = document.querySelector('.profile__edit-button');
const openPopupAddButton = document.querySelector('.profile__add-button')
const closePopupButton = popup.querySelector ('.popup__close');
const closePopupAddButton = popupAdd.querySelector ('.popup__close');
const formElement = popup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_status');
const profileName = document.querySelector ('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const elements = document.querySelector('.elements');
const formPopupAdd = document.querySelector('.popup-add__form');
const inputTitle = document.getElementById('title-input');
const inputSource = document.getElementById('source-input');

// tempalte
const elementTemplate = document.querySelector('#template-element').content.querySelector('.element')

// функции для открытия и закрытия "попапа"
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

// Функции для отправления формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopupRemove()
}

const handlerSubmitAddSourceForm = (evt) => {
    evt.preventDefault();
    addElement({link:inputSource.value , name:inputTitle.value});
    inputSource.value = '';
    inputTitle.value = '';
    closePopupAddPhoto()
}

// функции для лайков и удаления карточек

const handleLikeImages = (evt) => {
    evt.target.closest('.element__like').classList.toggle('element__like_active');
}

const handleDeleteCard = (evt) => {
    evt.target.closest('.element').remove();
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
    },
];

generateInititalItem = (initialItem) => {
    const newInitialItem = elementTemplate.cloneNode(true);

    const titleInitialCards = newInitialItem.querySelector('.element__title');
    const imageInitialCards = newInitialItem.querySelector('.element__image');

    imageInitialCards.src = initialItem.link;
    titleInitialCards.textContent = initialItem.name;

    const likeImage = newInitialItem.querySelector('.element__like');

    likeImage.addEventListener('click' , handleLikeImages)

    const deleteCard = newInitialItem.querySelector('.element__delete')
    deleteCard.addEventListener('click' , handleDeleteCard)

    return newInitialItem;
}

const addElement = (initialItem) => {
    elements.prepend(generateInititalItem(initialItem))
};

initialCards.forEach((initialItem) => {
    addElement(initialItem);
});

// События
formElement.addEventListener('submit', formSubmitHandler);
openPopupButton.addEventListener('click', openPopupAdd);
closePopupButton.addEventListener('click', closePopupRemove);

formPopupAdd.addEventListener('submit', handlerSubmitAddSourceForm);
openPopupAddButton.addEventListener('click',openPopupAddPhoto);
closePopupAddButton.addEventListener('click',closePopupAddPhoto);







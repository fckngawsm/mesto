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

// Просмотр фотографий
function openPopupImage(popupImage) {
    popupImage.classList.add('popup_is-opened');
}
function closePopupImage(popupImage) {
    popupImage.classList.remove('popup_is-opened');
}

// Работа с добавлением элементов

const initialCards = [
    {
        name: 'Зандам',
        link: 'https://images.unsplash.com/photo-1641300817800-5d46fd2aeeb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        alt: 'Архыз',
    },
    {
        name: 'Берн',
        link: 'https://images.unsplash.com/photo-1610734287146-94cb52a72718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        alt: 'Челябинская область',
    },
    {
      name: 'Вашингтон',
      link: 'https://images.unsplash.com/photo-1562714529-94d65989df68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
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
    const likeImage = newInitialItem.querySelector('.element__like');
    const titleInitialCards = newInitialItem.querySelector('.element__title');
    const imageInitialCards = newInitialItem.querySelector('.element__image');
    const deleteCard = newInitialItem.querySelector('.element__delete');

    const popupImage = document.querySelector('.popup-image');
    const popupImageContent = document.querySelector('.popup-image__photo');
    const popupImageDescription = document.querySelector('.popup-image__description');
    const closePopupImage = document.getElementById('popup-image__close');


    imageInitialCards.src = initialItem.link;
    titleInitialCards.textContent = initialItem.name;

    imageInitialCards.addEventListener('click', () => {
        openPopupImage(popupImage);
        popupImageContent.src = initialItem.link;
        popupImageContent.alt = initialItem.name;
        popupImageDescription.textContent = initialItem.name;
    });
    imageInitialCards.addEventListener('click', () => {
        closePopupImage(popupImage);
    });
    likeImage.addEventListener('click' , handleLikeImages);
    deleteCard.addEventListener('click' , handleDeleteCard);

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

//
// const popupImage = document.querySelector('.popup-image');
// const elementImage = document.querySelector('.element__image');
// const closePopupImageButton = popupImage.querySelector('.popup__close');

// function openPopupImage(){
//     popupImage.classList.add('popup_is-opened');
// }

// function closePopupImage(){
//     popupImage.classList.remove('popup_is-opened')
// }

// elementImage.addEventListener('click', openPopupImage);
// closePopupImageButton.addEventListener('click', closePopupImage);





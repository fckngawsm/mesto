// переменные
const popupProfile = document.querySelector('.popup_profile');
const popups = document.querySelectorAll('.popup')
const popupAdd = document.querySelector('.popup-add')
const popupOpenEditButton = document.querySelector('.profile__edit-button');
const popupOpenAddButton = document.querySelector('.profile__add-button')
const popupCloseEditButton = popupProfile.querySelector ('.popup__close-edit');
const popupCloseAddButton = popupAdd.querySelector ('.popup__close-add');
const formElement = popupProfile.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_status');
const profileName = document.querySelector ('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const elements = document.querySelector('.elements');
const formPopupAdd = document.querySelector('.popup-add__form');
const inputTitle = document.getElementById('title-input');
const inputSource = document.getElementById('source-input');
const buttonCloseImage = document.querySelector('.popup__close-image');
const popupImage = document.querySelector('.popup-image');
// tempalte
const elementTemplate = document.querySelector('#template-element').content.querySelector('.element');
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

function closePopupOverlay(evt){
    if(evt.target === evt.currentTarget){
        for (let i = 0;i < popups.length; i ++){
            closePopup(popups[i]);
        }
    }
    // document.removeEventListener('mouseup', closePopupOverlay);
}

// popups.forEach((popupOpen) => {
//     popupOpen.addEventListener('mousedown',handleEscClose)
// })

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

// функции для лайков и удаления карточек

const handleLikeImages = (evt) => {
    evt.target.closest('.element__like').classList.toggle('element__like_active');
};

const handleDeleteCard = (evt) => {
    evt.target.closest('.element').remove();
};

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

    const popupImageContent = document.querySelector('.popup-image__photo');
    const popupImageDescription = document.querySelector('.popup-image__description');

    imageInitialCards.src = initialItem.link;
    titleInitialCards.textContent = initialItem.name;
    imageInitialCards.alt = initialItem.alt;

    imageInitialCards.addEventListener('click', () => {
        openPopup(popupImage);
        popupImageContent.src = initialItem.link;
        popupImageContent.alt = initialItem.name;
        popupImageDescription.textContent = initialItem.name;
    });

    likeImage.addEventListener('click' , handleLikeImages);
    deleteCard.addEventListener('click' , handleDeleteCard);

    return newInitialItem;
};

const addElement = (initialItem) => {
    elements.prepend(generateInititalItem(initialItem));
};

initialCards.forEach((initialItem) => {
    addElement(initialItem);
});

//


// События
formElement.addEventListener('submit', submitFormHandler);
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
    const buttonSubmit = document.querySelector(validationSettings.submitButtonSelector);
    console.log(validationSettings.submitButtonSelector);
    disableSubmitButton(validationSettings, buttonSubmit);
});
popupCloseAddButton.addEventListener('click', () => closePopup(popupAdd));
//
buttonCloseImage.addEventListener('click', () => closePopup(popupImage));









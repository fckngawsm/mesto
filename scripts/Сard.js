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
//

// Работа с классом
export class Card {
  constructor(data,cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._alt = data.alt;
      this._cardSelector = cardSelector;
  }

  // template
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);


    return cardElement
  }

  // функции по лайку и удалению карточки
  _handleLikeImages = () => {
    this._likeImage.classList.toggle('element__like_active');
  };

  _handleDeleteCard = () => {
    this._deleteImage.closest('.element').remove();
  };

  // события
    _setEventListeners() {
        this._likeImage.addEventListener('click', () => {
          this._handleLikeImages();
        });

        this._deleteImage.addEventListener('click', evt => {
          this._handleDeleteCard(evt);
        });
        this._cardImage.addEventListener('click' , ()  => {
          this._popupImageContent.src = this._link;
          this._popupImageDescription.textContent = this._name;
          handleCardClick();
        })
    }
    // карточки
    generateInititalItem() {
        this._element = this._getTemplate()


        this._likeImage = this._element.querySelector('.element__like');
        this._deleteImage = this._element.querySelector('.element__delete');
        this._cardImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title')

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._alt;

        this._popupImageContent = document.querySelector('.popup-image__photo');
        this._popupImageDescription = document.querySelector('.popup-image__description');
        this._setEventListeners()
        return this._element
    };
}

export function addElement(initialItem) {
  const card = new Card (initialItem, '.template-element');
  const cardElement = card.generateInititalItem();

  document.querySelector('.elements').prepend(cardElement)
}

initialCards.forEach((initialItem) => {
  addElement(initialItem);
});

import { handleCardClick } from "./script.js";
import { initialCards } from "./initialCards.js";
import { _popupImageContent , _popupImageDescription , handleCardClick } from "./script.js";
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
    this._element.remove();
    this._element = null;
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
          _popupImageContent.src = this._link;
          _popupImageDescription.textContent = this._name;
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

        this._cardImage.src = this._link;
        this._elementTitle.textContent = this._name;
        this._cardImage.alt = this._alt;

        this._setEventListeners()
        return this._element
    };
}



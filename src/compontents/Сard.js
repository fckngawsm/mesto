export default class Card {
  constructor(
    cardSelector,
    userId,
    { data, handleCardClick, handleDeleteClick, handleLikeCard }
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;

    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._id = data._id;
    this._userId = userId;

    this._cardSelector = cardSelector;

    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeImage = handleLikeCard;
  }

  // template

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  deleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  _hideDeleteButton() {
    if (this._ownerId !== this._userId) {
      this._deleteImage.remove();
    }
  }

  isLiked() {
    return this._likes.find((user) => user._id === this._userId);
  }

  _checkOwnLike() {
    this.isLiked() ? this.addLike() : this.deleteLike();
  }

  setLike(data) {
    this._likes = data;
    this._likesCount.textContent = this._likes.length;
  }

  addLike = () => {
    this._likeImage.classList.add("element__like_active");
  };

  deleteLike = () => {
    this._likeImage.classList.remove("element__like_active");
  };

  // события

  _setEventListeners() {
    this._likeImage.addEventListener("click", () => {
      this._handleLikeImage();
      console.log(this._like);
    });

    this._deleteImage.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  // карточки

  generateInititalItem() {
    this._element = this._getTemplate();
    this._likeImage = this._element.querySelector(".element__like");
    this._deleteImage = this._element.querySelector(".element__delete");
    this._cardImage = this._element.querySelector(".element__image");
    this._elementTitle = this._element.querySelector(".element__title");
    this._likesCount = this._element.querySelector(".element__like-count");

    this._cardImage.src = this._link;
    this._elementTitle.textContent = this._name;
    this._cardImage.alt = this._alt;

    this._setEventListeners();
    this.setLike(this._likes);
    this._hideDeleteButton();
    this._checkOwnLike();

    return this._element;
  }
}

// импорт
import "./index.css";
import PopupWithSubmit from "../compontents/PopupWithSubmit";
import { FormValidator } from "../compontents/FormValidator.js";
import Card from "../compontents/Сard.js";
import Section from "../compontents/Section.js";
import Popup from "../compontents/Popup.js";
import PopupWithImage from "../compontents/PopupWithImage.js";
import PopupWithForm from "../compontents/PopupWithForm.js";
import UserInfo from "../compontents/UserInfo.js";
import {
  popupOpenEditButton,
  popupOpenAddButton,
  popupCloseEditButton,
  popupCloseAddButton,
  nameInput,
  jobInput,
  buttonCloseImage,
  formPopupAdd,
  formPopupEdit,
  validationSettings,
  popupCloseAvatar,
  formPopupAvatar,
  popupOpenChangeAvatar,
  popupCloseConfirm,
} from "../utils/constants";
import Api from "../compontents/Api.js";
// экземпляр api
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-46",
  headers: {
    authorization: "80d9c849-c96a-4d0e-9998-43bbe94da9ed",
    "Content-Type": "application/json",
  },
});
// экземпляр userinfo
const profile = new UserInfo({
  selectorName: ".profile__name",
  selectorInfo: ".profile__status",
  selectorAvatar: ".profile__avatar",
});

// экземпляр секции
const defaultCards = new Section(
  {
    items: [],
    renderer: (items) => {
      const card = createCard(items);
      defaultCards.addItem(card);
    },
  },
  ".elements"
);

// рендер карточки и поулчение информации из сервера
let userId = null;
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userId = userData._id;

    profile.setUserInfo(userData);
    profile.setUserAvatar(userData);
    initialCards.reverse();
    defaultCards.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

//

// валдиация
const validatorEditProfile = new FormValidator(
  validationSettings,
  formPopupEdit
);
validatorEditProfile.enableValidation();
const validatorAddCard = new FormValidator(validationSettings, formPopupAdd);
validatorAddCard.enableValidation();
const validatorChangeAvatar = new FormValidator(
  validationSettings,
  formPopupAvatar
);
validatorChangeAvatar.enableValidation();

// работа с папопами

// экземпляр для попапа с картинкой
const imageOpen = new PopupWithImage(".popup_type_image");
imageOpen.setEventListeners();

const popupConfirmDelete = new PopupWithSubmit(".popup_type_delete", {
  handleSubmit: (data) => {
    api
      .deleteCard(data)
      .then(() => {
        popupConfirmDelete.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupConfirmDelete.setEventListeners();
// функция для удаления карточки со страницы
function handleCardDelete(card) {
  popupConfirmDelete.setFormSubmitHandler(() => {
    api
      .deleteCard(card._id)
      .then(() => {
        card.deleteCard();

        popupConfirmDelete.close();
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  });
  popupConfirmDelete.open();
}
// создание карточки
export function createCard(data) {
  const card = new Card(".template-element", userId, {
    data,
    handleCardClick: () => {
      imageOpen.open(data.name, data.link);
    },
    handleDeleteClick: () => handleCardDelete(card),
    handleLikeCard: () => {
      if (card.isLiked()) {
        api
          .deleteLike(card._id)
          .then((data) => {
            card.deleteLike();
            card.setLike(data.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .setLike(card._id)
          .then((data) => {
            card.addLike();
            card.setLike(data.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  });
  return card.generateInititalItem();
}

// экземпляр попапа редактирование профиля
const popupEditProfile = new PopupWithForm(".popup_type_profile", {
  submit: (data) => {
    popupEditProfile.renderLoading(true);
    api
      .updateUserInfo(data)
      .then((res) => {
        profile.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false);
      });

    popupEditProfile.close();
  },
});
popupEditProfile.setEventListeners();

//экзампеляр класса с добавлением карточки
const popupAddImage = new PopupWithForm(".popup_type_add", {
  submit: (data) => {
    popupAddImage.renderLoading(true);
    api
      .sendCard(data)
      .then((data) => {
        const card = createCard(data);
        defaultCards.addItem(card);
        popupAddImage.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddImage.renderLoading(false);
      });
  },
});

popupAddImage.setEventListeners();
// экземлпяр класса с обновлением аватарки
const popupChangeAvatar = new PopupWithForm(".popup_type_avatar", {
  submit: (data) => {
    popupChangeAvatar.renderLoading(true);
    api
      .updateAvatar(data)
      .then((res) => {
        profile.setUserAvatar(res);
        popupChangeAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupChangeAvatar.renderLoading(false);
      });
  },
});
popupChangeAvatar.setEventListeners();

// получени данных профиля
function editProfile() {
  const data = profile.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.about;
}

// События

//
popupOpenEditButton.addEventListener("click", () => {
  editProfile();
  popupEditProfile.open();
});
popupCloseEditButton.addEventListener("click", () => popupEditProfile.close);
//
popupOpenAddButton.addEventListener("click", () => {
  popupAddImage.open();
  validatorAddCard.disableSubmitButton();
});
//
popupCloseAddButton.addEventListener("click", () => {
  popupAddImage.close();
});
//
buttonCloseImage.addEventListener("click", () => imageOpen.close());
//
popupOpenChangeAvatar.addEventListener("click", () => {
  popupChangeAvatar.open();
  validatorChangeAvatar.disableSubmitButton();
});
popupCloseAvatar.addEventListener("click", () => {
  popupChangeAvatar.close();
});
//
popupCloseConfirm.addEventListener("click", () => {
  popupConfirmDelete.close();
});

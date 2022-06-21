const addButton = document.querySelector(".profile__add-button");
const cardAdd = document.querySelector(".popup_type_add-card");
const closeButtonAdd = document.querySelector(".popup__close-buttonAdd");
const closeButtonImage = document.querySelector(".popup__close-buttonImage");
const ulCards = document.querySelector(".elements");
const cardTempalte = document.querySelector(".template").content;
const formAddCardElement = document.querySelector(".popup__form_add-card");

const cardNameFieldElement = document.querySelector(".popup__input_card-name");
const linkFieldElement = document.querySelector(".popup__input_card-link");

const popupImageOpen = document.querySelector(".popup_type_open-image");

addButton.addEventListener("click", function () {
  openPopup(cardAdd);
  nameFieldElement.value = nameElement.textContent;
  aboutFieldElement.value = aboutElement.textContent;
});

closeButtonAdd.addEventListener("click", function () {
  closePopup(cardAdd);s
});

for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].name, initialCards[i].link);
}

function addCard(name, link) {
  let cardLi = cardTempalte.querySelector(".elements__card").cloneNode(true);
  cardLi.querySelector(".elements__image").src = link;
  cardLi.querySelector(".elements__image").alt = name;

  cardLi.querySelector(".elements__title").textContent = name;

  let buttonLike = cardLi.querySelector(".elements__like-button");

  buttonLike.addEventListener("click", function () {
    if (buttonLike.classList.contains("elements__like-button_active")) {
      buttonLike.classList.remove("elements__like-button_active");
    } else {
      buttonLike.classList.add("elements__like-button_active");
    }
  });

  let trashButtonLi = cardLi.querySelector(".elements__trash-button");

  trashButtonLi.addEventListener("click", function () {
    trashButtonLi.closest('ul').removeChild(trashButtonLi.closest('li'));
  });

  let imageLi = cardLi.querySelector(".elements__image");

  imageLi.addEventListener("click", function () {
    openPopup(popupImageOpen);
    let popupImage = document.querySelector(".popup__image");
    popupImage.src = link;
    popupImage.alt = name;
    let popupCaption = document.querySelector(".popup__caption");
    popupCaption.textContent = name;
  });

  ulCards.prepend(cardLi);
} /* попап добавления и удаления карточки */

formAddCardElement.addEventListener("submit", function (event) {
  closePopup(cardAdd);
  event.preventDefault();
  addCard(cardNameFieldElement.value, linkFieldElement.value);

  formAddCardElement.reset();
}); /* попап-форма для добавления карточки */

closeButtonImage.addEventListener("click", function () {
  closePopup(popupImageOpen);
});
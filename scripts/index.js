import Card from './Card.js';
import FormValidator from './FormValidator.js'

const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ];

const editButton = document.querySelector(".profile__edit-button"); // попап для редактирования профиля
const popupEdit = document.querySelector(".popup_type_edit");
const closeButtonEdit = document.querySelector(".popup__close-button"); // попап для закрытия редактирования профиля

const nameElement = document.querySelector(".profile__title");
const nameFieldElement = document.querySelector(".popup__input_data-name");

const aboutElement = document.querySelector(".profile__position");
const aboutFieldElement = document.querySelector(".popup__input_data-about");

const formEditElement = document.querySelector(".popup__form_type_edit");

popupEdit.addEventListener('click', (event)=>{
  if(event.target === popupEdit){
  closePopup(popupEdit);
  }
});

const closeEscPopup = (event) =>{
  if(event.key === 'Escape'){
    closePopup(document.querySelector(".popup_opened"));
  }
};

function openPopup(popup) {
  popup.classList.add("popup_opened")
  
  document.addEventListener('keydown', closeEscPopup);
}

function closePopup(popup) {
  document.removeEventListener('keydown', closeEscPopup);
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", function () {
  openPopup(popupEdit);
  nameFieldElement.value = nameElement.textContent;
  aboutFieldElement.value = aboutElement.textContent; 
  editFormValidator.resetValidation();
});

closeButtonEdit.addEventListener("click", function () {
  closePopup(popupEdit);
});

formEditElement.addEventListener("submit", function (event) {
  closePopup(popupEdit);
  event.preventDefault();
  nameElement.textContent = nameFieldElement.value;
  aboutElement.textContent = aboutFieldElement.value;
});

const config = {
  buttonElement: '.popup__button',
  errorClass: 'form__input_type_error',
  errorActiveClass: 'form__input-error_active',
  submitInactiveClass: 'popup__button_inactive',
  popupForm: '.popup__form',
  popupInput: '.popup__input',
  errorBorder: 'popup__input_error-border'
}

const editFormValidator = new FormValidator(config, document.querySelector('.popup__form_type_edit'));
editFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, document.querySelector('.popup__form_add-card'));
addCardFormValidator.enableValidation();


const addButton = document.querySelector(".profile__add-button");
const cardAdd = document.querySelector(".popup_type_add-card");
const closeButtonAdd = document.querySelector(".popup__close-button-add");
const closeButtonImage = document.querySelector(".popup__close-button-image");
const ulCards = document.querySelector(".elements");
const cardTemplate = document.querySelector(".template").content;
const formAddCardElement = document.querySelector(".popup__form_add-card");

const cardNameFieldElement = document.querySelector(".popup__input_card-name");
const linkFieldElement = document.querySelector(".popup__input_card-link");

const popupImageOpen = document.querySelector(".popup_type_open-image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

function handleCardClick(name, link) {
  openPopup(popupImageOpen);
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
}

cardAdd.addEventListener('click', (event)=>{
  if(event.target === cardAdd){
  closePopup(cardAdd);
  }
});

popupImageOpen.addEventListener('click', (event)=>{
  if(event.target === popupImageOpen){
  closePopup(popupImageOpen);
  }
});

addButton.addEventListener("click", function () {
  openPopup(cardAdd);
  cardNameFieldElement.value = '';
  linkFieldElement.value = '';
  addCardFormValidator.resetValidation();
});

closeButtonAdd.addEventListener("click", function () {
  closePopup(cardAdd);
});

function createCard(name, link, cardTemplate, handleCardClick, ulCards){
  ulCards.prepend(new Card(name, link, cardTemplate, handleCardClick).createCard());
}

for (let i = 0; i < initialCards.length; i++) {
  createCard(initialCards[i].name, initialCards[i].link, cardTemplate, handleCardClick, ulCards);
}

formAddCardElement.addEventListener("submit", function (event) {
  closePopup(cardAdd);
  event.preventDefault();
  createCard(cardNameFieldElement.value, linkFieldElement.value, cardTemplate, handleCardClick, ulCards);

  formAddCardElement.reset();
  addCardFormValidator.toggleButtonState();
}); /* попап-форма для добавления карточки */

closeButtonImage.addEventListener("click", function () {
  closePopup(popupImageOpen);
});
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
  hideInputError(formAddCardElement,cardNameFieldElement, config);
  hideInputError(formAddCardElement,linkFieldElement, config);
});

closeButtonAdd.addEventListener("click", function () {
  closePopup(cardAdd);
});

for (let i = 0; i < initialCards.length; i++) {
  const newCard = createCard(initialCards[i].name, initialCards[i].link);
  ulCards.prepend(newCard);
}

function createCard(name, link) {
  const cardLi = cardTemplate.querySelector(".elements__card").cloneNode(true);
  const imageLi = cardLi.querySelector(".elements__image");
  imageLi.src = link;
  imageLi.alt = name;

  cardLi.querySelector(".elements__title").textContent = name;

  const buttonLike = cardLi.querySelector(".elements__like-button");

  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("elements__like-button_active");
  });

  const trashButtonLi = cardLi.querySelector(".elements__trash-button");

  trashButtonLi.addEventListener("click", function () {
    trashButtonLi.closest('.elements__card').remove();
  });

  imageLi.addEventListener("click", function () {
    openPopup(popupImageOpen);
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;
  });

  return cardLi;
} /* попап добавления и удаления карточки */

formAddCardElement.addEventListener("submit", function (event) {
  closePopup(cardAdd);
  event.preventDefault();
  const newCard = createCard(cardNameFieldElement.value, linkFieldElement.value);
  ulCards.prepend(newCard);

  formAddCardElement.reset();
  const inputList = Array.from(formAddCardElement.querySelectorAll('.popup__input'));
  const buttonElement = formAddCardElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement, formAddCardElement.id);
}); /* попап-форма для добавления карточки */

closeButtonImage.addEventListener("click", function () {
  closePopup(popupImageOpen);
});
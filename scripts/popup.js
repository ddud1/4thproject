const editButton = document.querySelector(".profile__edit-button"); // попап для редактирования профиля
const popupEdit = document.querySelector(".popup_type_edit");
const closeButtonEdit = document.querySelector(".popup__close-button-edit"); // попап для закрытия редактирования профиля

const nameElement = document.querySelector(".profile__title");
const nameFieldElement = document.querySelector(".popup__input_data-name");

const aboutElement = document.querySelector(".profile__position");
const aboutFieldElement = document.querySelector(".popup__input_data-about");

const formEditElement = document.querySelector(".popup__form_type_edit");

function openPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener('click', (event)=>{
    if(event.target === popup){
    closePopup(popup);
    }
  });
  document.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape'){
      closePopup(popup);
    }
  });
  popup.querySelectorAll('.popup')
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", function () {
  openPopup(popupEdit);
  nameFieldElement.value = nameElement.textContent;
  aboutFieldElement.value = aboutElement.textContent;
  enableValidation();
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
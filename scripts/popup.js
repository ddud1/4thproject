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

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(`.${inputElement.id}-error`);
  const buttonElement = formElement.querySelector(`.${formElement.id}__button`)
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
  console.log(`.${formElement.id}__submit_inactive`);
  buttonElement.classList.add(`${formElement.id}__submit_inactive`);
  buttonElement.disabled=true;
};

const hideInputError = (formElement, inputElement) => {
  console.log(`${inputElement.id}`);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  const buttonElement = formElement.querySelector(`.${formElement.id}__button`)
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
  console.log(`.${formElement.id}__submit_inactive`);
  buttonElement.classList.remove(`${formElement.id}__submit_inactive`)
  buttonElement.disabled=false;
}; 

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    console.log(inputElement.textContent)
    console.log(inputElement.validity.valid);
  return !inputElement.validity.valid;
});
}

const toggleButtonState = (inputList, buttonElement, formId) => {
  if (hasInvalidInput(inputList)) {
   buttonElement.classList.add(`${formId}__submit_inactive`);
   buttonElement.disabled=true;
 } else {
   buttonElement.classList.remove(`${formId}__submit_inactive`);
   buttonElement.disabled=false;
 } 
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement, formElement.id);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, formElement.id);
    });
  });
}; 

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};
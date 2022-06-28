const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log(`.${inputElement.id}-error`);
  const buttonElement = formElement.querySelector(`.${formElement.id}-button`)
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
  console.log(`.${formElement.id}_submit_inactive`);
  buttonElement.classList.add(`${formElement.id}__submit_inactive`);
  buttonElement.disabled=true;
};

const hideInputError = (formElement, inputElement) => {
  console.log(`${inputElement.id}`);
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  const buttonElement = formElement.querySelector(`.${formElement.id}-button`)
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
  console.log(`.${formElement.id}_submit_inactive`);
  buttonElement.classList.remove(`${formElement.id}_submit_inactive`)
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
   buttonElement.classList.add(`${formId}_submit_inactive`);
   buttonElement.disabled=true;
 } else {
   buttonElement.classList.remove(`${formId}_submit_inactive`);
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
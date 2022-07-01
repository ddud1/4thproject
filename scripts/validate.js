const config = {
    buttonElement: '.popup__button',
    errorClass: 'form__input_type_error',
    errorActiveClass: 'form__input-error_active',
    submitInactiveClass: 'popup__button_inactive',
    popupForm: '.popup__form',
    popupInput: '.popup__input',
    errorBorder: 'popup__input_error-border'
}

function resetError(formElement, config) { 
  const inputList = Array.from(formElement.querySelectorAll(config.popupInput));
  const buttonElement = formElement.querySelector(`.${formElement.id}-button`); 
  inputList.forEach(inputElement => hideInputError(formElement, inputElement, config));
  toggleButtonState(inputList, buttonElement, config); 
} 

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.errorClass);
  inputElement.classList.add(config.errorBorder);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorActiveClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.errorClass);
  inputElement.classList.remove(config.errorBorder);
  errorElement.classList.remove(config.errorActiveClass);
  errorElement.textContent = '';
}; 

const isValid = (formElement, inputElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.popupInput));
  const buttonElement = formElement.querySelector(`.${formElement.id}-button`)
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
    toggleButtonState(inputList, buttonElement, config);
  } else {
    hideInputError(formElement, inputElement, config);
    toggleButtonState(inputList, buttonElement, config);
  }
}; 

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
}

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
   buttonElement.classList.add(config.submitInactiveClass);
   buttonElement.disabled=true;
 } else {
   buttonElement.classList.remove(config.submitInactiveClass);
   buttonElement.disabled=false;
 } 
}

const setEventListeners = (config, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.popupInput));
  const buttonElement = formElement.querySelector(config.buttonElement);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
}; 

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.popupForm));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(config, formElement);
  });
};

enableValidation(config);
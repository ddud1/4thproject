export default class Card {
  constructor(name, link, templateSelector, handleCardClick){
    this.name = name;
    this.link = link;
    this.templateSelector = templateSelector;
    this.cardElement = this.templateSelector.querySelector(".elements__card").cloneNode(true);
    this._image = this.cardElement.querySelector(".elements__image")
    this._trashButtonLi = this.cardElement.querySelector(".elements__trash-button");
    this._buttonLike = this.cardElement.querySelector(".elements__like-button");
    this._handleCardClick = handleCardClick;
  }

  _setFields(){
    this._image.src = this.link;
    this._image.alt = this.name;
  }

  _setTitle(){
    this.cardElement.querySelector(".elements__title").textContent = this.name;
  }

  _setEventListeners(){

    this._image.addEventListener("click", () => {
      this._handleCardClick(this.name, this.link);
    });

    this._trashButtonLi.addEventListener("click", () => {
      this._trashButtonLi.closest('.elements__card').remove();
    });

    this._buttonLike.addEventListener("click", () => {
      this._buttonLike.classList.toggle("elements__like-button_active");
    }) 
  }

  createCard(name, link) {

    this._setFields();

    this._setTitle();

    this._setEventListeners();
  
    return this.cardElement;
  }
}
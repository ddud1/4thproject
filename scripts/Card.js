export default class Card {
  constructor(name, link, templateSelector, imageClickFunction){
    this.name = name;
    this.link = link;
    this.templateSelector = templateSelector;
    this.cardLi = this.templateSelector.querySelector(".elements__card").cloneNode(true);
    this._image = this.cardLi.querySelector(".elements__image")
    this._trashButtonLi = this.cardLi.querySelector(".elements__trash-button");
    this._buttonLike = this.cardLi.querySelector(".elements__like-button");
    this._imageClickFunction = imageClickFunction;
  }

  _setFields(){
    this._image.src = this.link;
    this._image.alt = this.name;
  }

  _setTitle(){
    this.cardLi.querySelector(".elements__title").textContent = this.name;
  }

  _setEventListeners(){

    this._image.addEventListener("click", () => {
      this._imageClickFunction(this.name, this.link);
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
  
    return this.cardLi;
  }
}
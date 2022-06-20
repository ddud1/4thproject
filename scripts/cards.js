const addButton = document.querySelector('.profile__add-button')
const cardAdd = document.querySelector('.popup_type_add-card')
const closeButtonAdd = document.querySelector('.popup__close-buttonAdd')
const closeButtonImage = document.querySelector('.popup__close-buttonImage')
const ulElement = document.querySelector('.elements')
const formAddCardElement = document.querySelector('.popup__form_add-card')

const cardNameFieldElement = document.querySelector('.popup__input_card-name')
const linkFieldElement = document.querySelector('.popup__input_card-link')

const popupImageOpen = document.querySelector('.popup_type_open-image')

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

addButton.addEventListener('click', function() {
    console.log(cardAdd.classList)
    cardAdd.classList.add('popup_add')
    nameFieldElement.value = nameElement.textContent;
    aboutFieldElement.value = aboutElement.textContent;
})

closeButtonAdd.addEventListener('click', function() {
  console.log(cardAdd.classList)
  cardAdd.classList.remove('popup_add')
})

for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].name, initialCards[i].link)
}

function addCard(name, link) {
  var li = document.createElement("li"); // <li></li>
  li.classList.add('elements__card'); // <li class="elements__card"></li>

  var imageLi = document.createElement("img");
    imageLi.classList.add('elements__image');
    imageLi.src = link;
    imageLi.alt = name;
    li.appendChild(imageLi);//<li ...> <img> </li>
    imageLi.addEventListener("click", function() {
      console.log(popupImageOpen.classList);
      popupImageOpen.classList.add('popup_open-image');
      var popupImage = document.querySelector(".popup__image");
      popupImage.src = link;
      var popupCaption = document.querySelector(".popup__caption");
      popupCaption.textContent = name;
    });

  var divLi = document.createElement("div");
    divLi.classList.add('elements__title-wrapper');

  var h2Li = document.createElement("h2");
    h2Li.classList.add('elements__title')
    h2Li.appendChild(document.createTextNode(name));
    divLi.appendChild(h2Li);

  var buttonLi = document.createElement("button");
    buttonLi.classList.add('elements__like-button');
    buttonLi.type='button';
    divLi.appendChild(buttonLi);

  var trashButtonLi = document.createElement("button");
    trashButtonLi.classList.add('elements__trash-button')
    trashButtonLi.type='button';
    li.appendChild(trashButtonLi);
    
    li.appendChild(divLi);
    ulElement.appendChild(li);
    trashButtonLi.addEventListener("click", function() {
      console.log(trashButtonLi.classList)
      var li = trashButtonLi.parentElement
      trashButtonLi.parentElement.parentElement.removeChild(li)
  });
  buttonLi.addEventListener("click", function() {
    console.log(buttonLi.classList)
    if(buttonLi.classList.contains('elements__like-button_active')){
      buttonLi.classList.remove('elements__like-button_active')
    }
    else{
      buttonLi.classList.add('elements__like-button_active')
}
});
}  // попап добавления и удаления карточки



formAddCardElement.addEventListener('submit', function(event) {
  cardAdd.classList.remove('popup_add')
  event.preventDefault()
  addCard(cardNameFieldElement.value, linkFieldElement.value)
}) // попап-форма для добавления карточки

closeButtonImage.addEventListener('click', function() {
  console.log(popupImageOpen.classList)
  popupImageOpen.classList.remove('popup_open-image')
})
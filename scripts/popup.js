const editButton = document.querySelector('.profile__edit-button') // попап для редактирования профиля
const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.popup__close-button')

const nameElement = document.querySelector('.profile__title')
const nameFieldElement = document.querySelector('.popup__input_data-name')

const aboutElement = document.querySelector ('.profile__position')
const aboutFieldElement = document.querySelector('.popup__input_data-about')

const formElement = document.querySelector('.popup__form')

const likeActive = document.querySelectorAll('.elements__like-button')


editButton.addEventListener('click', function() {
    console.log(popup.classList)
    popup.classList.add('popup_opened')
    nameFieldElement.value = nameElement.textContent;
    aboutFieldElement.value = aboutElement.textContent;
})

    closeButton.addEventListener('click', function() {
    popup.classList.remove('popup_opened')
})

formElement.addEventListener('submit', function(event) {
    popup.classList.remove('popup_opened')
    event.preventDefault()
    nameElement.textContent = nameFieldElement.value;
    aboutElement.textContent = aboutFieldElement.value;
})

for (let i = 0; i < likeActive.length; i++) {
    likeActive[i].addEventListener("click", function() {
        console.log(likeActive[i].classList)
        if(likeActive[i].classList.contains('elements__like-button_active')){
            likeActive[i].classList.remove('elements__like-button_active')
        }
        else{
        likeActive[i].classList.add('elements__like-button_active')
    }
    });
}




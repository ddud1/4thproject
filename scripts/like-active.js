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
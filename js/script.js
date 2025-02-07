const cardContainer = document.querySelector('.card');
const confirmationContainer = document.querySelector('.confirmation');

const cardButton = document.getElementById('card__button');
const confirmationButton = document.getElementById('confirmation__button');

cardButton.addEventListener('click', function(event) {
    event.preventDefault();
    


    // inputError('email');
    toggleConfirmation();
});

confirmationButton.addEventListener('click', function(event) {
    event.preventDefault();

    toggleConfirmation();

});

function toggleConfirmation() {
    cardContainer.classList.toggle('hide');
    confirmationContainer.classList.toggle('hide');
}

function inputError(object, message = "") {
    let errorInputObject = document.getElementById(object);

    let errorMessage = document.querySelector(`.${object}__error`);

    errorInputObject.classList.remove('input__ready');
    errorInputObject.classList.add('input__error');

    if(message != "") {
        errorMessage.innerHTML = message;
    }
    errorMessage.classList.remove('hide');
}
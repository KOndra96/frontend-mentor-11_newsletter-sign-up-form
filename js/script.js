const cardContainer = document.querySelector('.card');
const confirmationContainer = document.querySelector('.confirmation');

const form = document.getElementById('card__form');
const confirmationButton = document.getElementById('confirmation__button');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const data = {};
    const fields = event['target'].querySelectorAll("input, select, textarea");

    for(const field of fields) {
        data[field.name] = field.value;
    }

    let inputEmail = data['email'];

    if(!isEmail(inputEmail)) {
        inputError('email');
    } else {        
        toggleConfirmation(inputEmail);
    }
});

confirmationButton.addEventListener('click', function(event) {
    event.preventDefault();
    toggleConfirmation();
});

function toggleConfirmation(email = 'ash@loremcompany.com') {

    if(confirmationContainer.classList.contains('hide')) {
        let confirmationText = document.getElementById('confirmation__text');
        confirmationText.innerHTML = `
            A confirmation email has been sent to <b>${email}</b>.
            Please open it and click the button inside to confirm your subscription.
        `;
    }

    let emailInputObject = document.getElementById('email');
    emailInputObject.classList.remove('input__error');
    emailInputObject.classList.remove('input__ready');
    emailInputObject.classList.add('input__success');

    
    let errorMessage = document.querySelector(`.email__error`);
    errorMessage.classList.add('hide');
    
    cardContainer.classList.toggle('hide');
    confirmationContainer.classList.toggle('hide'); 
}

function inputError(object, message = "") {
    let errorInputObject = document.getElementById(object);
    let errorMessage = document.querySelector(`.${object}__error`);

    errorInputObject.classList.remove('input__ready');
    emailInputObject.classList.remove('input__success');
    errorInputObject.classList.add('input__error');

    if(message != "") {
        errorMessage.innerHTML = message;
    }
    errorMessage.classList.remove('hide');
}

function isEmail(string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(string);
}
    
    
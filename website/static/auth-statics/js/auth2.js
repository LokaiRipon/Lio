// from signup |\/|

let nameInput = document.getElementById('name');
let nameLabel = document.querySelector('.name-label');

let emailInput2 = document.getElementById('email2');
let emailLabel2 = document.querySelector('.email-label2');

let passwordInput2 = document.getElementById('password2');
let passwordLabel2 = document.querySelector('.password-label2');

let passwordConfirm = document.getElementById('password-confirm');
let passwordConfirmLabel = document.querySelector('.password-label3');



// for signup events
nameInput.addEventListener('focus', () => {
    nameLabel.classList.add('active-name');
    console.log('worked!');
});

emailInput2.addEventListener('focus', function() {
    emailLabel2.classList.add('active-email2');
    // alert('I\'m evented!!', "info");
    console.log('worked!');
});

passwordInput2.addEventListener('focus', () => {
    passwordLabel2.classList.add('active-password2');
    console.log('worked!');
});


passwordConfirm.addEventListener('focus', () => {
    passwordConfirmLabel.classList.add('active-password3');
    console.log('worked!');
});

// for blur events for signup

nameInput.addEventListener('blur', function() {
    if (nameInput.value === '') {
        nameLabel.classList.remove('active-name');
    }
});


emailInput2.addEventListener('blur', function() {
    if (emailInput2.value === '') {
        emailLabel2.classList.remove('active-email2');
    }
});

passwordInput2.addEventListener('blur', function() {
    if (passwordInput2.value === '') {
        passwordLabel2.classList.remove('active-password2');
    }
});

passwordConfirm.addEventListener('blur', function() {
    if (passwordConfirm.value === '') {
        passwordConfirmLabel.classList.remove('active-password3');
    }
});


const myMarquee = document.getElementById('myMarquee');

const isMotion = true;

myMarquee.addEventListener('click', () => {

    if (isMotion) {
        myMarquee.stop();
        isMotion = false;
        console.log('Stopped');
    } else {
        myMarquee.start();
        console.log('Started');
        isMotion = true;
    }
});


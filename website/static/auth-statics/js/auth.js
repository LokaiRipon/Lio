let emailInput = document.getElementById('email');
let emailLabel = document.querySelector('.email-label');

let passwordInput = document.getElementById('password');
let passwordLabel = document.querySelector('.password-label');

emailInput.addEventListener('focus', function() {
    emailLabel.classList.add('active-email');
    // alert('I\'m evented!!', "info");
    console.log('worked!');
});

passwordInput.addEventListener('focus', () => {
    passwordLabel.classList.add('active-password');
    console.log('worked!');
    document.getElementById('padlock').classList.add('ko');
});

//  on blur event 

emailInput.addEventListener('blur', function() {
    if (emailInput.value === '') {
        emailLabel.classList.remove('active-email');
    }
});

passwordInput.addEventListener('blur', function() {
    if (passwordInput.value === '') {
        passwordLabel.classList.remove('active-password');
        document.getElementById('padlock').classList.remove('ko');
    }
});

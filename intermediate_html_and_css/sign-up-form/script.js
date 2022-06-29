//// RESET FORM ON PAGE RELOAD ////
window.onload = () => document.getElementById('form-sign-up').reset();

//// FORM INPUT STYLING ////
(function showDivBackground() {
    const inputElem = [...document.querySelectorAll('form input:not(#password)')]; //Select all input element except password input

    inputElem.forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('div').classList.add('focus-div');
            input.parentElement.querySelector('label').classList.add('focus-label');
        });

        input.addEventListener('blur', () => {
            input.closest('div').classList.remove('focus-div');

            if (!input.value) {
                input.parentElement.querySelector('label').classList.remove('focus-label');
            }
        });
    });
})();

//// VALIDITY STYLING ////
const showInvalid = (element, msg) => {
    element.closest('div').classList.add('invalid-div');
    element.setCustomValidity(msg);
    element.reportValidity();
}

const removeInvalid = (element) => {
    element.closest('div').classList.remove('invalid-div');
    element.setCustomValidity('');
}

//// EMAIL VALIDATION ////
(function validateEmail() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('focus', removeInvalid.bind(null, emailInput));
    emailInput.addEventListener('blur', () => {
        if (!emailInput.checkValidity() && emailInput.value) {
            showInvalid(emailInput, 'Please enter email (ex: JohnBrown@provider'); 
        }
    });
})();

//// PHONE NUMBER VALIDATION ////
(function validatePhone() {
    const phoneInput = document.getElementById('phone');
    phoneInput.setCustomValidity('Please enter numeric phone number (ex: 123-456-7890)');

    let currInput = ['(', '_', '_', '_', ')', ' ', '_', '_', '_', '-', '_', '_', '_', '_'];
    let i = 1;

    const checkIfBorder = (index) => /\s|[)(-]/.test(currInput[index]);
    const handleKeyBoardInput = (e) => {
        e.preventDefault();

        i = phoneInput.selectionStart;

        if (e.key == 'ArrowLeft') {
            if (checkIfBorder(i - 1)) {
                if (currInput[i - 1] == ' ') {
                    phoneInput.selectionEnd = phoneInput.selectionStart = i -= 3;
                }
                else if (currInput[i - 1] == '-') {
                    phoneInput.selectionEnd = phoneInput.selectionStart = i -= 2;
                }
            } else {
                phoneInput.selectionEnd = phoneInput.selectionStart = i -= 1;
            }
        }

        if (e.key == 'ArrowRight') {
            if (checkIfBorder(i + 1)) {
                if (currInput[i + 1] == ')') {
                    phoneInput.selectionEnd = phoneInput.selectionStart = i += 3;
                }
                else if (currInput[i + 1] == '-') {
                    phoneInput.selectionEnd = phoneInput.selectionStart = i += 2;
                }
            } 
            else if (i + 1 < currInput.length) {
                phoneInput.selectionEnd = phoneInput.selectionStart = i += 1;
            }
        }

        if (e.key == 'Backspace' || e.key == 'Delete') {
            if (checkIfBorder(i - 1)) {
                if (currInput[i - 1] == ' ') {
                    currInput[i - 3] = '_';
                    phoneInput.value = currInput.join('');
                    phoneInput.selectionEnd = phoneInput.selectionStart = i -= 3;
                }
                else if (currInput[i - 1] == '-') {
                    currInput[i - 2] = '_';
                    phoneInput.value = currInput.join('');
                    phoneInput.selectionEnd = phoneInput.selectionStart = i -= 2;
                }
            }
            else if (/\d/.test(currInput[i - 1])) {
                currInput[i - 1] = '_';
                phoneInput.value = currInput.join('');
                phoneInput.selectionEnd = phoneInput.selectionStart = i -= 1;
            }
            else {
                phoneInput.selectionEnd = phoneInput.selectionStart = i -= 1;
            }
        }

        if (/\d/.test(e.key)) {
            if (currInput[i] == '_' || /\d/.test(currInput[i])) {
                currInput.splice(i, 1, e.key);
                phoneInput.value = currInput.join('');

                if (checkIfBorder(i + 1)) {
                    if (currInput[i + 1] == ')') {
                        phoneInput.selectionEnd = phoneInput.selectionStart = i += 3;
                    }
                    else if (currInput[i + 1] == '-') {
                        phoneInput.selectionEnd = phoneInput.selectionStart = i += 2;
                    }
                } 
                else {
                    phoneInput.selectionEnd = phoneInput.selectionStart = i += 1;
                }
            }
        }
    };

    phoneInput.parentElement.addEventListener('click', () => {
        if (checkIfBorder(phoneInput.selectionStart)) {
            phoneInput.selectionEnd = phoneInput.selectionStart = i;
            return;
        }
        i = phoneInput.selectionEnd = phoneInput.selectionStart;
    });

    phoneInput.addEventListener('focus', () => {
        removeInvalid(phoneInput);
        phoneInput.value = currInput.join('');
        window.addEventListener('keydown', handleKeyBoardInput);
    });

    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value == '(___) ___-____') {
            phoneInput.value = '';
            phoneInput.parentElement.querySelector('label').classList.remove('focus-label');
            phoneInput.setCustomValidity('Please enter numeric phone number (ex: 123-456-7890)');
        } else if (!phoneInput.checkValidity()) {
            showInvalid(phoneInput, 'Please enter numeric phone number (ex: 123-456-7890)'); 
        }
        window.removeEventListener('keydown', handleKeyBoardInput);
    });
})();

//// VALIDATE PASSWORD ////
(function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordConfirm = document.getElementById('confirm-password'); 
    const toggle = document.querySelector('.toggle');
    const container = passwordInput.closest('div'); 

    let toggleCoords = toggle.getBoundingClientRect();
    let containerCoords = container.getBoundingClientRect();

    toggle.style.display = 'none';

    container.addEventListener('click', (e) => {
        passwordInput.focus();
        toggle.style.display = 'block';

        if (e.clientX > toggleCoords.x && e.clientX < toggleCoords.x + toggleCoords.width
            && e.clientY > toggleCoords.y && e.clientY < toggleCoords.y + toggleCoords.height) {
            passwordInput.setAttribute('type', passwordInput.getAttribute('type') == 'password' ? 'text' : 'password');
        }
    });

    window.addEventListener('click', (e) => {
        if (e.clientX < containerCoords.x || e.clientX > containerCoords.x + containerCoords.width
            || e.clientY < containerCoords.y || e.clientY > toggleCoords.y + containerCoords.height) {
            
            if (!passwordInput.value) {
                container.querySelector('label').classList.remove('focus-label');
                toggle.style.display = 'none';
            }

            container.classList.remove('focus-div');
            passwordInput.blur();
        }
    });

    passwordInput.addEventListener('focus', () => {
        container.classList.add('focus-div');
        container.querySelector('label').classList.add('focus-label');
    });

    passwordConfirm.addEventListener('focus', removeInvalid.bind(null, passwordConfirm)); 
    passwordConfirm.addEventListener('blur', () => {
        if (passwordConfirm.value && passwordConfirm.value != passwordInput.value) {
            showInvalid(passwordConfirm, 'Please enter same password');
        }
    });
})();
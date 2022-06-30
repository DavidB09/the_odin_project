//// RESET FORM ON PAGE RELOAD ////
window.onload = () => document.getElementById('form-sign-up').reset();

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

//// FORM INPUT STYLING ////
(function showDivBackground() {
    const inputElem = [...document.querySelectorAll('form input')];

    inputElem.forEach(input => {
        //Add focus on div and label
        input.addEventListener('focus', () => {
            input.closest('div').classList.add('focus-div');
            input.parentElement.querySelector('label').classList.add('focus-label');
        });

        //Remove focus on div and possible label
        input.addEventListener('blur', () => {
            input.closest('div').classList.remove('focus-div');

            if (!input.value) {
                input.parentElement.querySelector('label').classList.remove('focus-label');
                removeInvalid(input);
            }
        });

        //Remove invalid styling
        input.addEventListener('input', removeInvalid.bind(null, input));
    });
})();

//// INPUT CONSTANTS ////
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-password'); 

//// EMAIL VALIDATION ////
(function validateEmail() {
    emailInput.addEventListener('blur', () => {
        if (!emailInput.checkValidity() && emailInput.value) {
            showInvalid(emailInput, 'Please enter email (ex: JohnBrown@provider'); 
        }
    });
})();

//// PHONE NUMBER VALIDATION ////
(function validatePhone() {
    const valid = phoneInput.parentElement.querySelector('.valid');
    valid.style.display = 'none';

    //Initialize phone input and character selection
    let currInput = ['(', '_', '_', '_', ')', ' ', '_', '_', '_', '-', '_', '_', '_', '_'];
    let i = 1;

    //Check if character is not editable ex: \s, (, ), -
    const checkNotEditable = (index) => /\s|[)(-]/.test(currInput[index]); 
    const handleKeyBoardInput = (e) => {
        e.preventDefault();
        removeInvalid(phoneInput);

        i = phoneInput.selectionStart; //Update current character selection

        //Check if move right input
        if (e.key == 'ArrowLeft') {
            //Check if not editable and move character selection accordingly
            if (checkNotEditable(i - 1)) {
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

        //Check if move right input
        if (e.key == 'ArrowRight') {
            //Check if not editable and move character selection accordingly
            if (checkNotEditable(i + 1)) {
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

        //Check if delete input
        if (e.key == 'Backspace' || e.key == 'Delete') {
            //Check if not editable and move character selection accordingly
            if (checkNotEditable(i - 1)) {
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
            else if (/\d/.test(currInput[i - 1])) { //Check if digit and remove accordingly
                currInput[i - 1] = '_';
                phoneInput.value = currInput.join('');
                phoneInput.selectionEnd = phoneInput.selectionStart = i -= 1;
            }
            else {
                phoneInput.selectionEnd = phoneInput.selectionStart = i -= 1;
            }
        }

        //Check if digit input
        if (/\d/.test(e.key)) {
            //Check if character editable
            if (currInput[i] == '_' || /\d/.test(currInput[i])) {
                currInput.splice(i, 1, e.key);
                phoneInput.value = currInput.join('');

                //Check if not editable and move character selection accordingly
                if (checkNotEditable(i + 1)) {
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

        valid.style.display = !phoneInput.validity.patternMismatch ? 'inline-block' : 'none'; //Show if valid
    };

    phoneInput.parentElement.addEventListener('click', () => {
        //Check if click was not on editable character
        if (checkNotEditable(phoneInput.selectionStart)) {
            phoneInput.selectionEnd = phoneInput.selectionStart = i; //Reset character selection
            return;
        }
        i = phoneInput.selectionEnd = phoneInput.selectionStart; //Update character selection
    });

    phoneInput.addEventListener('focus', () => {
        //Update shown value, show if valid, add keyboard input
        phoneInput.value = currInput.join('');
        valid.style.display = !phoneInput.validity.patternMismatch ? 'inline-block' : 'none'; 
        window.addEventListener('keydown', handleKeyBoardInput);
    });

    phoneInput.addEventListener('blur', () => {
        //Check if no keyboard input
        if (phoneInput.value == '(___) ___-____') {
            phoneInput.value = '';
            phoneInput.parentElement.querySelector('label').classList.remove('focus-label');
        } else if (!phoneInput.checkValidity()) {
            showInvalid(phoneInput, 'Please enter numeric phone number (ex: 123-456-7890)'); 
        }
        window.removeEventListener('keydown', handleKeyBoardInput); //Stop keyboard input
    });
})();

//// PASSWORD VALIDATION ////
(function validatePassword() {
    const container = passwordInput.closest('div'); 
    const toggle = document.querySelector('.toggle');
    toggle.style.display = 'none';

    container.addEventListener('click', (e) => {
        e.stopPropagation();

        //Remove toggle if not focused or no input
        let toggleCoords = toggle.getBoundingClientRect();
        toggle.style.display = container.classList.contains('focus-div') || passwordInput.value ? 'block' : 'none';

        //Check if click on toggle
        if (e.clientX > toggleCoords.x && e.clientX < toggleCoords.x + toggleCoords.width
            && e.clientY > toggleCoords.y && e.clientY < toggleCoords.y + toggleCoords.height) {
                passwordInput.setAttribute('type', passwordInput.getAttribute('type') == 'password' ? 'text' : 'password');
        }
    });

    window.addEventListener('click', (e) => {
        let containerCoords = container.getBoundingClientRect();

        //Check if click was outside of container
        if (e.clientX < containerCoords.x || e.clientX > containerCoords.x + containerCoords.width
            || e.clientY < containerCoords.y || e.clientY > toggleCoords.y + containerCoords.height) {

            //Check if label not focus
            if (!passwordInput.value) {
                container.querySelector('label').classList.remove('focus-label');
                toggle.style.display = 'none';
            }

            container.classList.remove('focus-div');
            passwordInput.blur();
        }
    });

    passwordConfirm.addEventListener('blur', () => {
        if (passwordConfirm.value && passwordConfirm.value != passwordInput.value) {
            showInvalid(passwordConfirm, 'Please enter same password');
        }
    });
})();

//// FORM VALIDATION ////
document.querySelector('button[type="submit"').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!firstNameInput.checkValidity()) {
        showInvalid(firstNameInput, 'Please enter first name');
        return;
    }

    if (!lastNameInput.checkValidity()) {
        showInvalid(lastNameInput, 'Please enter last name');
        return;
    }

    if (!emailInput.checkValidity()) {
        showInvalid(emailInput, 'Please enter email (ex: johnbrown@provider)');
        return;
    }

    if (!phoneInput.checkValidity()) {
        showInvalid(phoneInput, 'Please enter numeric phone number (ex: 123-456-7890)');
        return;
    }

    if (!passwordInput.value) {
        showInvalid(passwordInput, 'Please enter password');
        passwordInput.closest('div').click(); //Focus on password input
        return;
    }

    if (!passwordConfirm.value || passwordConfirm.value != passwordInput.value) {
        showInvalid(passwordConfirm, 'Please confirm password');
        return;
    }

    document.querySelector('form').submit();
});

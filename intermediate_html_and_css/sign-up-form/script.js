//// RESET FORM ON PAGE RELOAD ////
window.onload = () => document.getElementById('form-sign-up').reset();

//// EMAIL VALIDATION ////

(function validateEmail() {
    const emailInput = document.querySelector('input[type="email"]');

    emailInput.addEventListener('focus', (e) => {
        emailInput.closest('div').classList.remove('invalid-div');
        emailInput.setCustomValidity("");
    })

    emailInput.addEventListener('blur', (e) => {
        if (!emailInput.checkValidity() && emailInput.value) {
            emailInput.closest('div').classList.add('invalid-div');
            emailInput.setCustomValidity("Please enter email (ex: JohnBrown@provider");
            emailInput.reportValidity();
        }
    });
})();

//// PHONE NUMBER VALIDATION ////

(function validatePhone() {
    const phoneInput = document.querySelector('input[type="tel"]');
    phoneInput.value = "";
    phoneInput.setCustomValidity("Please enter numeric phone number (ex: 123-456-7890)");

    let currInput = ["(", "_", "_", "_", ")", " ", "_", "_", "_", "-", "_", "_", "_", "_"];
    let i = 1;

    const checkIfBorder = (index) => /\s|[)(-]/.test(currInput[index]);
    const handleKeyBoardInput = (e) => {
        e.preventDefault();

        i = phoneInput.selectionStart;

        if (e.key == "Backspace" || e.key == "Delete") {
            if (checkIfBorder(i - 1)) {
                if (currInput[i - 1] == " ") {
                    currInput[i - 3] = "_";
                    phoneInput.value = currInput.join("");
                    phoneInput.selectionEnd = phoneInput.selectionStart = i -= 3;
                }
                else if (currInput[i - 1] == "-") {
                    currInput[i - 2] = "_";
                    phoneInput.value = currInput.join("");
                    phoneInput.selectionEnd = phoneInput.selectionStart = i -= 2;
                }
            }
            else if (/\d/.test(currInput[i - 1])) {
                currInput[i - 1] = "_";
                phoneInput.value = currInput.join("");
                phoneInput.selectionEnd = phoneInput.selectionStart = i -= 1;
            }
            else {
                phoneInput.selectionEnd = phoneInput.selectionStart = i -= 1;
            }
        }

        if (/\d/.test(e.key)) {
            if (currInput[i] == "_" || /\d/.test(currInput[i])) {
                currInput.splice(i, 1, e.key);
                phoneInput.value = currInput.join("");

                if (checkIfBorder(i + 1)) {
                    if (currInput[i + 1] == ")") {
                        phoneInput.selectionEnd = phoneInput.selectionStart = i += 3;
                    }
                    else if (currInput[i + 1] == "-") {
                        phoneInput.selectionEnd = phoneInput.selectionStart = i += 2;
                    }
                } 
                else {
                    phoneInput.selectionEnd = phoneInput.selectionStart = i += 1;
                }
            }
        }
    }; 

    phoneInput.addEventListener('click', () => {
        if (!checkIfBorder(phoneInput.selectionStart)) {
            i = phoneInput.selectionEnd = phoneInput.selectionStart;
            return;
        }
        phoneInput.selectionEnd = phoneInput.selectionStart = i;
    }); 

    phoneInput.addEventListener('focus', () => {
        phoneInput.closest('div').classList.remove('invalid-div');
        phoneInput.setCustomValidity("");
    
        phoneInput.value = currInput.join("");
        window.addEventListener('keydown', handleKeyBoardInput);
    });

    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value == "(___) ___-____") {
            phoneInput.value = "";
            phoneInput.setCustomValidity("Please enter numeric phone number (ex: 123-456-7890)");
        } else if (!phoneInput.checkValidity()) {
            phoneInput.closest('div').classList.add('invalid-div');
            phoneInput.setCustomValidity("Please enter numeric phone number (ex: 123-456-7890)");
            phoneInput.reportValidity();
        }
        window.removeEventListener('keydown', handleKeyBoardInput);
    }); 
})();

//// VALIDATE PASSWORD ////

(function validatePassword() {
    const showToggle = document.querySelector('.password-toggle');
    const passwordInput = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#confirm-password'); 
    const container = passwordInput.closest("div"); 

    let toggleCoords = showToggle.getBoundingClientRect();
    let containerCoords = container.getBoundingClientRect();

    showToggle.style.display = 'none';

    container.addEventListener('click', (e) => {
        passwordInput.focus();
        showToggle.style.display = 'block';

        if (e.clientX > toggleCoords.x && e.clientX < toggleCoords.x + toggleCoords.width
            && e.clientY > toggleCoords.y && e.clientY < toggleCoords.y + toggleCoords.height) {
            passwordInput.setAttribute('type', passwordInput.getAttribute('type') == "password" ? "text" : "password");
        }
    });

    window.addEventListener('click', (e) => {
        if (e.clientX < containerCoords.x || e.clientX > containerCoords.x + containerCoords.width
            || e.clientY < containerCoords.y || e.clientY > toggleCoords.y + containerCoords.height) {
            
            if (!passwordInput.value) {
                container.querySelector('label').classList = '';
                showToggle.style.display = 'none';
            }

            container.classList = '';
            passwordInput.blur();
        }
    }); 

    passwordInput.addEventListener('focus', () => {
        container.classList = 'focus-div';
        container.querySelector('label').classList = 'focus-label';
    });

    passwordConfirm.addEventListener('focus', () => {
        passwordConfirm.closest('div').classList.remove('invalid-div');
        passwordConfirm.setCustomValidity("");
    })

    passwordConfirm.addEventListener('blur', () => {
        if (!passwordConfirm.value) return;

        if (passwordConfirm.value != passwordInput.value) {
            passwordConfirm.closest('div').classList.add('invalid-div');
            passwordConfirm.setCustomValidity("Please enter same password");
            passwordConfirm.reportValidity();
        }
    })

})();

//// FORM INPUT STYLING ////

(function showDivBackground() {
    const inputElem = [...document.querySelectorAll('form input:not(#password)')];

    inputElem.forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('div').classList.add('focus-div');
            input.parentElement.querySelector('label').classList.add('focus-label');
        });

        input.addEventListener('blur', (e) => {
            input.closest('div').classList.remove('focus-div');

            if (!input.value) {
                input.parentElement.querySelector('label').classList.remove('focus-label');
            }
        });
    });
})();
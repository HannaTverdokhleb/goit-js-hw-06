const inputSix = document.querySelector('#validation-input');
const inputSixAtrValue = inputSix.getAttribute('data-length');

inputSix.addEventListener("focus", () => {
  inputSix.classList.toggle('');
});

inputSix.addEventListener("blur", () => {
    if (inputSix.value.length >= inputSixAtrValue) {
        inputSix.classList.remove('invalid')
        inputSix.classList.add('valid');
    }
    else if (inputSix.value.length < inputSixAtrValue && inputSix.value.length != 0) {
        inputSix.classList.remove('valid');
        inputSix.classList.add('invalid');
    }
    else {
        inputSix.classList.remove('invalid', 'valid');
    }
});
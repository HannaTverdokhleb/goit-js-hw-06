document.querySelector('#validation-input')?.addEventListener("blur", (e) => {

    const input = e.target;
    const inputLength = input.value.length;
    const maxLength = input.dataset.length;

    if(parseInt(inputLength) === parseInt(maxLength)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});
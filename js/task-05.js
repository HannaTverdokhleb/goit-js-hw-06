const inputName = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    if (inputName.value == "") {
        output.textContent = "Anonymous";
    }
});

let counterValue = 0;
const value = document.querySelector("#value");

const reduse = document.querySelector('[data-action="decrement"]');
const increase = document.querySelector('[data-action="increment"]')
reduse.addEventListener('click', () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
});
increase.addEventListener('click', () => {
    counterValue += 1;
    value.innerHTML = counterValue;
});

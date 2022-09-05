const elControl = document.querySelector('#font-size-control');
const elText = document.querySelector('#text');

elControl.addEventListener('input', (event) => {
    elText.style.fontSize = `${event.currentTarget.value}px`;
});
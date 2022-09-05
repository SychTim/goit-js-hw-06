
const elInput = document.querySelector('#name-input');
const elName = document.querySelector('#name-output');

elInput.addEventListener('input', (event) => {
    if (event.currentTarget.value == '') {
    elName.textContent = 'Anonymous'
    } else {
        elName.textContent = event.currentTarget.value
    }
})
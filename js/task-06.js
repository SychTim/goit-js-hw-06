const elInput = document.querySelector('#validation-input');

elInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(elInput.dataset.length)) {
        elInput.classList.remove('invalid');
        elInput.classList.add('valid');
    } else {
        elInput.classList.remove('valid');
        elInput.classList.add('invalid');

    };
});

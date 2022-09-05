const elForm = document.querySelector('.login-form');

elForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const elEmail = event.currentTarget.elements.email.value;
    const elPassword = event.currentTarget.elements.password.value;

    if (elEmail === '' || elPassword === '') {
        window.alert('Все поля должны быть заполнены');
    } else {
        console.log({ emeil: elEmail, password: elPassword });
        elForm.reset();
    };
});
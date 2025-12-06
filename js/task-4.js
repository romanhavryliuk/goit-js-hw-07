const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const cleanEmail = email.trim();
    const cleanPassword = password.trim();
    if (cleanEmail === "" || cleanPassword === "") {
        alert('All form fields must be filled in');
        return;
    };
    const data = {
        email: cleanEmail,
        password: cleanPassword,
    };
    console.log(data);
    form.reset();
}
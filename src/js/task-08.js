const refs = {
    form: document.querySelector('.login-form'),
    inputs: document.querySelectorAll('input'),
}

refs.form.addEventListener('submit', onSubmitEvent);

function onSubmitEvent(event) {
    event.preventDefault();

    //const data = {};

    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    };

    const data = {
        email: email.value,
        password: password.value,
    };

    /* refs.inputs.forEach(input => data[input.getAttribute('name')] = '');

    for (const key in data) {
        console.log(key.value)
        data[key] = refs.form.elements.key.value;
        console.log(email.value)
    } */
    


    console.log(data);

    event.currentTarget.reset();
}
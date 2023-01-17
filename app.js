const showNavbar = () => {
    console.log('start navbar');
    document.getElementById("navbar").style.display = 'block';

}




/*
document.addEventListener("DOMContentLoaded", function() {
    fields.fullName = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.fullName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);

    return valid;
}

class User {
    constructor(fullName, email, message) {
        this.fullName = fullName;
        this.email = email;
        this.message = message;
    }
}
*/

/*
Email.send({
    Host: "smtp.gmail.com",
    Username: "username", //gmail adresse
    Password: "password", //gmail password - NICHT SICHER
    To: 'viktoria.engel@outlook.de',
    From: document.getElementById("email").value,
    Subject: "Portfolio Contact",
    Body: "Name: " + document.getElementById("name").value +
        "<br> Email: " + document.getElementById("email").value +
        "<br> Message: " + document.getElementById("message").value
}).then(
    message => alert("Message sent successfully!")
);
*/
// function registerForm_OnSubmit(e) {
//     var registerForm = document.querySelector("#registerForm");

//     const name = registerForm.navn.value;
//     const telephone = registerForm.tlf.value;
//     const email = registerForm.email.value;

//     console.log(registerForm);

//     return false;
// }

class Register {
    name = "";
    telephone = "";
    email = "";

    constructor(name, telephone, email) {
        this.name = name;
        this.telephone = telephone;
        this.email = email;
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var form = document.querySelector("#registerForm");
        form.addEventListener('submit', function (event) {
            console.log("Submitting form", form);
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();
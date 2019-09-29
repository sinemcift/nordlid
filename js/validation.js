// self executing function
(function () {
    //Enables Javascript Strict Mode
    'use strict';
    //Add Event Listener on load of the form
    window.addEventListener('load', function () {
        //get the form
        var form = document.querySelector("#registerForm");
        //on submit event
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();


window.addEventListener('load', function () {
    
    let form = this.document.querySelector('form')

    form.addEventListener("submit", function (e) {
        let errores = [];

        let email = document.querySelector('#email')
        if (email.value == "") {
            errores.push("Debe completar el campo email")
        }        
        let category = document.querySelector('#password')
        if (category.value == "") {
            errores.push("Debe completar el campo contraseña")
        }

        if (errores.length > 0) {
            e.preventDefault();

            ulErrores.innerHTML = "<li> </li>"
            for (let i = 0; i < errores.length; i++) {                
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }        
    })
})
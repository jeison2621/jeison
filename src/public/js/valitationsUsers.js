window.addEventListener('load', function () {
    
    let form = this.document.querySelector('form')

    form.addEventListener("submit", function (e) {
        let errores = [];

        let ulErrores = document.querySelector('.errors')
        let name = document.querySelector('#name')       
        if (name.value == "") {
            errores.push("Debe completar el campo nombre(s)")
        }

        let description = document.querySelector('#lastname')       
        if (description.value == "") {
            errores.push("Debe completar el campo apellidos")
        }

        let email = document.querySelector('#email')
        if (email.value == "") {
            errores.push("Debe completar el campo email")
        }        
        let password = document.querySelector('#password')
        if (password.value == "") {
            errores.push("Debe completar el campo contraseña")
        }
        
        let image = document.querySelector('#image')
        if (image.value == "") {
            errores.push("Debe seleccionar una imagen")
        }
        
        let rol = document.querySelector('#rol')
        if (rol.value == "") {
            errores.push("Debe seleccionar un rol")
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
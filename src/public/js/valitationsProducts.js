window.addEventListener('load', function () {
    
    let form = this.document.querySelector('form')

    form.addEventListener("submit", function (e) {
        let errores = [];

        let ulErrores = document.querySelector('.errors')
        let name = document.querySelector('#name')       
        if (name.value == "") {
            errores.push("Debe completar el campo nombre(s)")
        }

        let description = document.querySelector('#description')       
        if (description.value == "") {
            errores.push("Debe completar el campo descripción")
        }

        let image = document.querySelector('#image')
        if (image.value == "") {
            errores.push("Debe seleccionar una imagen")
        }        
        let category = document.querySelector('#category')
        if (category.value == "") {
            errores.push("Debe seleccionar una categoría")
        }
        
        let amount = document.querySelector('#amount')
        if (amount.value == "") {
            errores.push("Debe completar el campo cantidad")
        }
        
        let typeAmount = document.querySelector('#typeAmount')
        if (typeAmount.value == "") {
            errores.push("Debe seleccionar un tipo de cantidad")
        }
        
        let price = document.querySelector('#price')
        if (price.value == "") {
            errores.push("Debe completar el campo precio")
        }
        
        let discount = document.querySelector('#discount')
        if (discount.value == "") {
            errores.push("Debe seleccionar un descuento")
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
let cajaNombre = document.getElementById('nombremedicamento')
let cajaPresentacion = document.getElementById('presentacionmedicamento')
let cajaDosis = document.getElementById('dosismedicamento')
let cajaLaboratorio = document.getElementById('laboratoriomedicamento')
let cajaContraIndicaciones = document.getElementById('contraindicacionesmedicamento')
let cajaFechaCaducidad = document.getElementById('fechacaducidad')
let cajaRegistroInvima = document.getElementById('invima')
let cajaTieneCopago = document.getElementById('copago')

let botonRegistroMedicamento = document.getElementById("botonregistromedicamento")



botonRegistroMedicamento.addEventListener('click',(e) => {
    e.preventDefault()

    let datosFormulario = {
        nombre:cajaNombre.value,
        presentacion:cajaPresentacion.value,
        dosis:cajaDosis.value,
        laboratorio:cajaLaboratorio.value,
        fechaCaducidad:cajaFechaCaducidad.value,
        contraindicaiones:cajaContraIndicaciones.value,
        resgistroInvima:cajaRegistroInvima.value,
        tieneCopago:cajaTieneCopago.value,
    }
    
    console.log(datosFormulario);
    
    Swal.fire({
        title: "Buen Trabajo",
        text: "Medicamento registrado con exito",
        icon: "success"
      });
})

let cajaNombre = document.getElementById('nombremedicamento')
let cajaPresentacion = document.getElementById('presentacionmedicamento')
let cajaDosis = document.getElementById('dosismedicamento')
let cajaLaboratorio = document.getElementById('laboratoriomedicamento')
let cajaContraIndicaciones = document.getElementById('contraindicacionesmedicamento')
let cajaFechaCaducidad = document.getElementById('fechacaducidad')
let cajaRegistroInvima = document.getElementById('invima')
let cajaTieneCopago = document.getElementById('copago')

let botonRegistroPaciente = document.getElementById("botonregistromedicamento")



botonRegistroPaciente.addEventListener('click',(e) => {
    e.preventDefault()

    let datosFormulario = {
        nombre:cajaNombre.value,
        anioNacimiento:cajaFechaNacimiento.value,
        ciudad:cajaCiudad.value,
        telefono:cajaTelefono.value,
        ips:cajaIPS.value,
        tienePoliza:cajaAsegurado.value,
        grupoIngreso:cajaGrupoIngreso.value,
        fechaAfiliacion:cajaFechaAfiliacion.value,
    }
    
    console.log(datosFormulario);
    
    Swal.fire({
        title: "Buen Trabajo",
        text: "Ya haces parte de nuestra familia",
        icon: "success"
      });
})

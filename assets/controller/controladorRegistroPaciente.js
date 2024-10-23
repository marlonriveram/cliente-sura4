let cajaNombre = document.getElementById('nombrepaciente')
let cajaFechaNacimiento = document.getElementById('nacimientoPaciente')
let cajaCiudad = document.getElementById('ciudadpaciente')
let cajaCorreo = document.getElementById('correopaciente')
let cajaIPS = document.getElementById('ipspaciente')
let cajaTelefono = document.getElementById('telefonopaciente')
let cajaFechaAfiliacion = document.getElementById('afiliacionpaciente')
let cajaGrupoIngreso = document.getElementById('grupoingresopaciente')
let cajaAsegurado = document.getElementById('tienepoliza')

let botonRegistroPaciente = document.getElementById("botonregistrarpaciente")



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



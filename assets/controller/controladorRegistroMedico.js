let cajaNombre = document.getElementById('nombremedico')
let cajaMatricula = document.getElementById('matriculamedico')
let cajaEspecialidad = document.getElementById('especialidadmedico')
let cajaSalario = document.getElementById('salariomedico')
let cajaTelefono = document.getElementById('telefonomedico')
let cajaCorreo = document.getElementById('correopaciente')
let cajaDireccion = document.getElementById('direcionmedico')
let cajaIpsAsociado = document.getElementById('ipsmedico')
let cajaTrabajaFinesdeSemana = document.getElementById('findesemana')

let botonRegistroPaciente = document.getElementById("botonregistromedico")



botonRegistroPaciente.addEventListener('click',(e) => {
    e.preventDefault()

    // let datosFormulario = {
    //     nombre:cajaNombre.value,
    //     anioNacimiento:cajaFechaNacimiento.value,
    //     ciudad:cajaCiudad.value,
    //     telefono:cajaTelefono.value,
    //     ips:cajaIPS.value,
    //     tienePoliza:cajaAsegurado.value,
    //     grupoIngreso:cajaGrupoIngreso.value,
    //     fechaAfiliacion:cajaFechaAfiliacion.value,
    // }
    
    console.log(datosFormulario);
    
    Swal.fire({
        title: "Buen Trabajo",
        text: "Ya haces parte de nuestra familia",
        icon: "success"
      });
})

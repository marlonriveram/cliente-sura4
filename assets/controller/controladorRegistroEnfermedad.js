let cajaNombre = document.getElementById('nombreenfermedad')
let cajaSintomas = document.getElementById('sintomas')
let cajaClasificacion = document.getElementById('clasificacionenfermedad')
let cajaGradoEnfermedad = document.getElementById('gradoenfermedad')
let cajaProbabilidadSobrevivir = document.getElementById('probabilidadvivir')


let botonRegistroEnfermedad = document.getElementById("bontonenfermedad")



botonRegistroEnfermedad.addEventListener('click',(e) => {
    e.preventDefault()

    let datosFormulario = {
        nombre:cajaNombre.value,
        sintomas:cajaSintomas.value,
        clasificaciond:cajaClasificacion.value,
        grado:cajaGradoEnfermedad.value,
        probabilidadVivir:cajaProbabilidadSobrevivir.value,
    }
    
    console.log(datosFormulario);
    
    Swal.fire({
        title: "Buen Trabajo",
        text: "Enfermedad registrada con exito",
        icon: "success"
    });
})

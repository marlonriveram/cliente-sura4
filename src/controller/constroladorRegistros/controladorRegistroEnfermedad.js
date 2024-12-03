import { Post } from "../fecth.mjs"

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
        clasificacion:cajaClasificacion.value,
        grado:cajaGradoEnfermedad.value,
        probabilidadVivir:cajaProbabilidadSobrevivir.value,
    }
    
    Post('http://localhost:8080/api/enfermedad', datosFormulario)
    .then(enfermedad => {
        console.log(enfermedad); 
        Swal.fire({
            title: "Buen Trabajo",
            text: "Enfermedad registrado con exito",
            icon: "success"
        });
    })
})

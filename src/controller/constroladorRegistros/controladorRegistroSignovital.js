import { Post } from "../fecth.mjs"

let cajaNombre = document.getElementById('nombresignovital')
let cajaValor = document.getElementById('valorsignovital')
let cajafechaMedicacion = document.getElementById('fechamedicionsignovital')



let botonRegistroSignovital = document.getElementById("bontonensignovital")



botonRegistroSignovital .addEventListener('click',(e) => {
    e.preventDefault()

    let datosFormulario = {
        nombre:cajaNombre.value,
        valor:cajaValor.value,
        fechaMedida:cajafechaMedicacion.value,
    }
    
    Post('http://localhost:8080/api/signosvitales', datosFormulario)
    .then(signovital => {
        console.log(signovital); 
        Swal.fire({
            title: "Buen Trabajo",
            text: "Signo vial registrado con exito",
            icon: "success"
        });
    })
})

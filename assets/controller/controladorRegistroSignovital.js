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
    
    console.log(datosFormulario);
    
    Swal.fire({
        title: "Buen Trabajo",
        text: "Signo vital registrado con exito",
        icon: "success"
      });
})

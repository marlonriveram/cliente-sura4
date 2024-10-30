import{ pacientesSimulaciones } from "../../../src/data/simularPaciente.js"

let fila = document.getElementById('fila')

// debo recorrer los datos de la BD para pintarlos
pacientesSimulaciones.forEach((paciente) =>{
    console.log(paciente)
    //APLICANDO TRAVESING

    //1. Creo una columna para cada paciente
    let columna = document.createElement("div")
    columna.classList.add("col")

    //2. creo una targeta para cada paciente
    let targeta = document.createElement("div")
    targeta.classList.add("card","h-100","p-5","shadow")

    //3. creo una teiqueta para el nombre de cada paciente
    let etiquetaNombre = document.createElement("h3")
    etiquetaNombre.classList.add("text-center")
    etiquetaNombre.textContent = paciente.nombre

    let etiquetaIcon = document.createElement("img")
    etiquetaIcon.classList.add("img-fluid","w-50","p-3","mx-auto","d-block")
    etiquetaIcon.src = "/assets/img/fabiconpaciente.png"

    let etiquetaIPS = document.createElement("h4")
    etiquetaIPS.classList.add("text-start")
    etiquetaIPS.textContent = "IPS: " + paciente.ips

    let etiquetaCorreo = document.createElement("h5")
    etiquetaCorreo.classList.add("text-start","textosura")
    etiquetaCorreo.textContent = "Correo: " + paciente.correo

    let etiquetaTelefono = document.createElement("h5")
    etiquetaTelefono.classList.add("text-start")
    etiquetaTelefono.textContent = "Correo: " + paciente.telefono

    let etiquetaCiudad = document.createElement("h5")
    etiquetaCiudad.classList.add("text-start")
    etiquetaCiudad.textContent = "Ciudad: " + paciente.ciudad

    let etiquetaGrupoIngreso = document.createElement("h5")
    etiquetaGrupoIngreso.classList.add("text-start")
    etiquetaGrupoIngreso.textContent = "Grupo Ingreso: " + paciente.grupoIngreso

    
    let etiquetaGrupoAfiliado = document.createElement("h5")
    etiquetaGrupoAfiliado.classList.add("text-start","fw-bold")
    etiquetaGrupoAfiliado.textContent = "Grupo Afiliado: " + paciente.etiquetaGrupoAfiliado

    let etiquetaFechaAfiliacion = document.createElement("h5")
    etiquetaFechaAfiliacion.classList.add("text-start")
    etiquetaFechaAfiliacion.textContent = "Fecha Afiliacion: " + paciente.fechaAfiliacion

    
    let eliminar = document.createElement("h5")
    eliminar.classList.add("btn","btn-primary")
    eliminar.textContent = "Eliminar."



    //Paso final -- ASOCIO LAS ETIQUETAS
    targeta.appendChild(etiquetaNombre)
    targeta.appendChild(etiquetaIcon)
    targeta.appendChild(etiquetaIPS)
    targeta.appendChild(etiquetaCorreo)
    targeta.appendChild(etiquetaTelefono)
    targeta.appendChild(etiquetaCiudad)
    targeta.appendChild(etiquetaGrupoIngreso)
    targeta.appendChild(etiquetaGrupoAfiliado)
    targeta.appendChild(etiquetaFechaAfiliacion)
    targeta.appendChild(eliminar)
    columna.appendChild(targeta)
    fila.appendChild(columna)
})
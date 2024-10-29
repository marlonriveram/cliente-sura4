import{ pacientesSimulaciones } from "../../data/simularPaciente.js"

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
    targeta.classList.add("card","h-100","p-50","shadow")

    //3. creo una teiqueta para el nombre de cada paciente
    let etiquetaNombre = document.createElement("h3")
    etiquetaNombre.classList.add("text-center")
    etiquetaNombre.textContent = paciente.nombre

    //Paso final -- ASOCIO LAS ETIQUETAS
    targeta.appendChild(etiquetaNombre)
    columna.appendChild(targeta)
    fila.appendChild(columna)
})
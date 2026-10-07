const formulario = document.getElementById("formulario")
const boton = document.getElementById("boton")


boton.addEventListener("click", () => {
    formulario.classList.toggle("modo-oscuro")
    if(boton.value == "Modo oscuro"){
        boton.value = "Modo claro"
    }else{
        boton.value = "Modo oscuro"
    }
})
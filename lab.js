const opciones = ["PIEDRA", "PAPEL", "TIJERA"]

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

let computadora = opciones[getRandomInt(3)]
let salir = "No"

do{
    let usuario = prompt("Juegue PIEDRA, PAPEL O TIJERA")
    usuario = usuario.toUpperCase()
    console.log(usuario)
    console.log(computadora)
    if(computadora == usuario){
        console.log("¡Estamos empatados!")

    } else if(usuario == "PIEDRA" && computadora == "TIJERA"){
        console.log("¡Felicidades... Ganaste!")

    } else if(usuario == "PAPEL" && computadora == "PIEDRA"){
        console.log("¡Felicidades... Ganaste!")

    }else if(usuario == "TIJERA" && computadora == "PAPEL"){
        console.log("¡Felicidades... Ganaste!")

    } else {
        console.log("Lo siento... Perdiste")
    }
    
    salir = prompt("Desea salir? Escriba Si o No")
    
    
}while(salir != "No")

// EJERCICIO 2

    const frutas = ["manzana", "uva", "banano", "pera", "sandia", "kiwi", "naranja"]
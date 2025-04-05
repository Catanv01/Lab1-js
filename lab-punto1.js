const opciones = ["PIEDRA", "PAPEL", "TIJERA"]

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

let computadora = opciones[getRandomInt(3)]
let salir = "N"

do{
    let usuario = prompt("escoge PIEDRA, PAPEL O TIJERA")
    usuario = usuario.toUpperCase()
    console.log("JUGADA USUARIO: "+usuario)
    console.log("JUGADA COMPUTADORA: "+computadora)
    if(computadora == usuario){
        console.log("¡ESTAMOS EMPATADOS!")

    } else if(usuario == "PIEDRA" && computadora == "TIJERA"){
        console.log("¡FELICIDADES... GANASTE!😄")

    } else if(usuario == "PAPEL" && computadora == "PIEDRA"){
        console.log("¡FELICIDADES... GANASTE!😄")

    }else if(usuario == "TIJERA" && computadora == "PAPEL"){
        console.log("FELICIDADES... GANASTE!😄")

    } else {
        console.log("LO SIENTO... PERDISTE🥺")
    }
    computadora = opciones[getRandomInt(3)]
    salir = prompt("¿Desea seguir jugando?(S/N)")
    
    
}while(salir != "N")
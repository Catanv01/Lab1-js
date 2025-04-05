// EJERCICIO 2

const frutas = ["manzana", "uva", "banano", "pera", "sandia", "kiwi", "naranja"]

console.log(frutas)

frutas.sort()

console.log(frutas)

function SingularAPlural(palabra){
    if (palabra.endsWith("s")){
        return palabra
    }
    return palabra+"s"
}

let frutasPlural = []

for(let fruta of frutas){
    frutasPlural.push(SingularAPlural(fruta))
}

console.log(frutasPlural)

function existeFruta(fruta){
    return frutas.includes(fruta)
}

console.log(existeFruta("mango"))
console.log(existeFruta("uva"))

let frutasCortas = frutas.filter(fruta => fruta.length <= 4)
console.log(frutasCortas)

function eliminarFruta(fruta){
    if(frutas.includes(fruta)){
        let indiceFruta = frutas.findIndex(frutaActual => frutaActual === fruta)
        frutas.splice(indiceFruta, 1)
        return true
    }
    return false
}

console.log(eliminarFruta("mango"))
console.log(frutas)
console.log(eliminarFruta("pera"))
console.log(frutas)
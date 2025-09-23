const  numeroSecreto = Math.floor(Math.random() * 10 +1)

const numeroJugador = parseInt(prompt("Adivina el numero secreto 1 y 10"))

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades ganaste, encontraste el numero secreto")
} else if (numeroSecreto < numeroJugador) {
console.log("El numero es muy alto, intentelo de nuevo")
}else {
    console.log("El numero es muy bajo, intentelo otra vez")
}
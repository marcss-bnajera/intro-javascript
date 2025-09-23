/**
 * TIPO DE DATO 'number'
 */

//1. Entero y decimal
const entero = 42
const decimal = 3.14

//2. Notacion cientifica
const cientifica = Infinity
const noEsNumero = NaN

//Operaciones Aritmeticas
//1. Suma, Resta, Multiplicacion y Division
const sum = 5 + 6
const resta = 4 - 6
const multiplicacion = 4 * 8
const division = 16 / 2

//2. Modulo y exponenciacion
const modulo = 16 % 8
const exponenciacion = 2 ** 4

//PRESICION, js tiene problemas de calculo

const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado.toFixed(1) == 0.3)
console.log(resultado == 0.3)

//OPERACIONES AVANZADAS

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio * 10 + 1)

let numero = aleatorio * 20 + 10

console.log(Math.trunc(numero))

//Ejemplo
const numero2 = 2
const booleano = true
console.log(numero2 + booleano)

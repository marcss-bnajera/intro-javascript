/**
 *      OPERADORES DE COMPARACION
 */

// == -> Igualdad
// === -> para comprar, igualda en valor y en tipo de dato
// != -> es diferente o no es igual, devuelve un true si es diferente y false si es igual
// !== -> es diferente el valor y el tipo de dato

// > -> mayor que
// < -> menor que
// => -> mayor o igual que
// <= -> menor o igual que

const a = 10
const b = 20
const c = "10"

console.log(a == b) //false
console.log(a === c) //false
console.log(a == c) //true
console.log(a != c) //false -> si se interpreta como iguales
console.log(a !== c)//true
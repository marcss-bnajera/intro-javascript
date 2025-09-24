/**
 * 
 * Ejercicio 15: Instrucciones
 * Escribe un programa que imprima la tabla de multiplicar de un 
 * número dado por el usuario.
 * 
 */

function tablaDeMultiplicar() {
  let numeroUsuario = prompt("Ingresar el numero del que quieres la tabla: ");

  let numero = parseInt(numeroUsuario);

  if (isNaN(numero)) {
    alert("¡Eso no es un numero, por favor, recarga la pagina y vuelve a intentarlo");
    return;
  }

  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

tablaDeMultiplicar();
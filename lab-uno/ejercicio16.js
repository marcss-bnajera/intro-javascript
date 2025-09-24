/**
 * 
 * Ejercicio 16: Instrucciones
 * Crea una función que tome un arreglo de números y retorne el 
 * número más grande en el arreglo.
 * 
 */

function encontrarNumeroMasGrandeConPrompt() {
  let inputUsuario = prompt("Por favor, ingresa varios numeros separados por comas: ");

  if (inputUsuario === null) {
    console.log("Operacion cancelada");
    return;
  }

  let arregloDeStrings = inputUsuario.split(',');

  let arregloDeNumeros = [];

  for (let item of arregloDeStrings) {
    let numero = parseInt(item.trim());

    if (!isNaN(numero)) {
      arregloDeNumeros.push(numero);
    }
  }

  if (arregloDeNumeros.length === 0) {
    console.log("No se ingresaron numeros validos");
    return;
  }

  let numeroMasGrande = arregloDeNumeros[0];

  for (let i = 1; i < arregloDeNumeros.length; i++) {
    if (arregloDeNumeros[i] > numeroMasGrande) {
      numeroMasGrande = arregloDeNumeros[i];
    }
  }

  console.log(`Los numeros ingresados son: [${arregloDeNumeros}]\nEl numero mas grande es: ${numeroMasGrande}`);
}

encontrarNumeroMasGrandeConPrompt();
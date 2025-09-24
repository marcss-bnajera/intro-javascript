/**
 * Ejercicio 26: Instrucciones
 * Crea una función que reciba una cadena de texto y cuente la 
 * cantidad de vocales que contiene.
 * 
 */

function contarVocales() {

  let cadena = prompt("Por favor, ingresa una cadena de texto para contar sus vocales: ").toLowerCase();

  if (cadena === null) {
    console.log("Operacion cancelada.");
    return;
  }
  
  let contadorDeVocales = 0;

  const vocales = "aeiou";

  for (const caracter of cadena) {
    if (vocales.includes(caracter)) {
      contadorDeVocales++;
    }
  }

  console.log(`La cadena que ingresaste es: "${cadena}"`);
  console.log(`El numero de vocales que contiene es: ${contadorDeVocales}`);
}

contarVocales();
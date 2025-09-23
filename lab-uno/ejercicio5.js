/**
 * 
 * Ejercicio 5: Instrucciones
 * rea un programa que determine si un año es bisiesto. Un año es 
 * bisiesto si es divisible por 4, excepto aquellos divisibles
 * por 100 pero no por 400.
 * 
 */

function verificarAñoBisiesto() {
    let año = Number(prompt("Ingrese un año: "));
  
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
      console.log(año + " es un año bisiesto.");
    } else {
      console.log(año + " no es un año bisiesto.");
    }
  }
  
  verificarAñoBisiesto();
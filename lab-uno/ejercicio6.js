/**
 * 
 * Ejercicio 6: Instrucciones
 * Escribe una función que reciba un número del 1 al 7 y retorne el día 
 * de la semana correspondiente (ej. 1 = "Lunes").
 * 
 */

function obtenerDiaDeLaSemana() {
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    let resultado;
  
    if (numero === 1) {
      resultado = "Lunes";
    } else if (numero === 2) {
      resultado = "Martes";
    } else if (numero === 3) {
      resultado = "Miercoles";
    } else if (numero === 4) {
      resultado = "Jueves";
    } else if (numero === 5) {
      resultado = "Viernes";
    } else if (numero === 6) {
      resultado = "Sabado";
    } else if (numero === 7) {
      resultado = "Domingo";
    } else {
      resultado = "Numero no valido. Por favor, ingrese un numero del 1 al 7.";
    }
    console.log(resultado);
  }

  obtenerDiaDeLaSemana();
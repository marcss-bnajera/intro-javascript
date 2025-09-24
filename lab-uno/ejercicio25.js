/**
 * 
 * Ejercicio 16: Instrucciones
 * Escribe un programa que simule un cajero automático. Pide al 
 * usuario un monto a retirar y verifica si tiene saldo suficiente.
 * 
 */

function simularCajero() {
  let saldo = parseFloat(prompt("Bienvenido al cajero automático, por favor, ingresa tu saldo actual: "));

  if (isNaN(saldo) || saldo < 0) {
    console.log("Saldo inicial no valido, por favor, recarga la pagina e intenta de nuevo");
    return;
  }

  let montoARetirar = parseFloat(prompt("¿Qué cantidad deseas retirar?"));

  if (isNaN(montoARetirar) || montoARetirar < 0) {
    console.log("Monto a retirar no válido, por favor, recarga la pagina e intenta de nuevo");
    return;
  }

  if (saldo >= montoARetirar) {
    saldo -= montoARetirar;
    
    console.log(`Retiro exitoso, tu nuevo saldo es: Q${saldo.toFixed(2)}`);
  } else {
    console.log("Saldo insuficiente, no se puede realizar la operacion");
  }
}

simularCajero();
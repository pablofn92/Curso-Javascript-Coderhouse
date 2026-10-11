// SIMULADOR DE CALCULADORA UTILIZANDO FUNCIONES
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function calculadora(nro1, nro2, operacion) {
   switch (operacion) {
    case "+":
      console.log("Resultado de la operación suma:", sumar(nro1, nro2));
      break;
    case "-":
      console.log("Resultado de la operación resta:", restar(nro1, nro2));
      break;
    case "*":
      console.log("Resultado de la operación multiplicación:", multiplicar(nro1, nro2));
      break;
    case "/":
      console.log("Resultado de la operación división:", dividir(nro1, nro2));
      break;
   }
 }
 
 while (confirm("Deseas usar la calculadora?")) {
   let numero1 = Number(prompt("Ingresa el número 1"));
   if (numero1 === null || isNaN(numero1)) {
    alert("Operación inválida.");
    break;
   }
   let operacion = prompt(
     "Qué operación deseas realizar? Ingresa el símbolo correspondiente:\n" +
       "+ : sumar\n" +
       "- : restar\n" +
       "* : multiplicar\n" +
       "/ : dividir\n",
   );
   if (operacion !== "+" && operacion !== "-" && operacion !== "*" && operacion !== "/") {
    alert("Operación inválida.");
    break;
   } 
   let numero2 = Number(prompt("Ingresa el número 2"));
   if (numero2 === null || isNaN(numero2)) {
    alert("Operación inválida.");
    break;
   }
  calculadora(numero1, numero2, operacion);

}
console.log("¡Bienvenido a nuestro sitio web!");
    
const anioActual = 2026;
const horasDia = 24;

let nombre = prompt("Por favor, ingresa tu nombre:");
let anioNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento:"));
let horaActual = parseInt(prompt("Por favor, ingresa la hora actual:"));

let edad = anioActual - anioNacimiento;
let horasRestantes = horasDia - horaActual;

console.log('Hola ' + nombre + '! Veo que tienes ' + edad + ' años de pura juventud.' + ' Aun nos quedan aprox. ' + horasRestantes + ' hora(s) para programar!');

alert('Hola ' + nombre + '! Veo que tienes ' + edad + ' años de pura juventud.' + ' Aun nos quedan aprox. ' + horasRestantes + ' hora(s) para programar!');
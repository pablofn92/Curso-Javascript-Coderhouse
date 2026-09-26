// SIMULADOR DE COMPRA ONLINE
let edad = parseInt(prompt("Bienvenido a Fruteria JS. Para poder comprar en nuestra pagina, debe ser mayor de edad. Por favor, ingrese su edad:"));

if(edad >= 18) {
    alert("Bienvenido a Fruteria JS. Puede ingresar a nuestra pagina.");
	console.log("Bienvenido a Fruteria JS!");
} else {
	alert("No puede ingresar. Debe ser mayor de edad.");
}

const usuario = "cliente";
const contraseña = "1234";
let login = false;
let intentos = 0;
let continuar = "si"

while (continuar !== "no" && edad >= 18 && !login && intentos < 3) {
    let ingresoUsuario = prompt("ingrese su usuario");
    let ingresoContraseña = prompt("ingrese su contraseña");
    if (ingresoUsuario === usuario && ingresoContraseña === contraseña) {
        login = true;
        console.log("acceso concedido");
    } else if (intentos < 3) {
        intentos++;
        alert("contraseña incorrecta. Quedan " + (3 - intentos) + " intento(s)");
    } 
}
if (intentos === 3) {
        alert("Acceso denegado. Ha excedido el número máximo de intentos.");
        console.log("Acceso denegado. Ha excedido el número máximo de intentos.");
    }
    

while (login === true && continuar !== "no") {
let fruta = Number(prompt("Ingrese el número correspondiente a su elección de compra: (1) Manzana, (2) Banana, (3) Naranja, (4) Frutilla. Presione cualquier otro número para salir."));

switch (fruta) {
    case 1:
        console.log("Usted seleccionó Manzana. El precio por kilo es de $1.75");
        break;
    case 2:
        console.log("Usted seleccionó Banana. El precio por kilo es de $1.50");
        break;
    case 3:
        console.log("Usted seleccionó Naranja. El precio por kilo es de $2.00");
        break;
    case 4:
        console.log("Usted seleccionó Frutilla. El precio por kilo es de $3.00");
        break;
    default:
        console.log("Usted ha seleccionado salir. Gracias por su visita.");
}

    if (fruta === 1) {
        let cantidad = parseInt(prompt("cuantos kilos va a llevar?"));
        let precioTotal = cantidad * 1.75;
        console.log("su total es: $" + precioTotal);
    }
    if (fruta === 2) {
        let cantidad = parseInt(prompt("cuantos kilos va a llevar?"));
        let precioTotal = cantidad * 1.50;
        console.log("su total es: $" + precioTotal);
    }
    if (fruta === 3) {
        let cantidad = parseInt(prompt("cuantos kilos va a llevar?"));
        let precioTotal = cantidad * 2.00;
        console.log("su total es: $" + precioTotal);
    }
    if (fruta === 4) {
        let cantidad = parseInt(prompt("cuantos kilos va a llevar?"));
        let precioTotal = cantidad * 3.00;
        console.log("su total es: $" + precioTotal);
    }
    continuar = prompt("Desea agregar algo más? (si/no)");
   
}

console.log("Gracias por elegir Frutería JS!");

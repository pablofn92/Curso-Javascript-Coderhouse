// Simulador: control de stock tienda
const productosEnStock = ["Shampoo", "Acondicionador", "Desengrasante", "Rollo de cocina", "Desinfectante", "Lavandina"];

productosEnStock.push("Escoba");
productosEnStock.unshift("Limpia vidrios");

const productoAgotado = productosEnStock.pop();
console.log(`Se ha eliminado el elemento: ${productoAgotado}`);

const buscado = prompt("¿Qué producto querés buscar?");

if (productosEnStock.includes(buscado)) {
  const posicion = productosEnStock.indexOf(buscado);
  console.log(`✅ "${buscado}" está en stock, en la posición ${posicion}`);
} else {
  console.log(`❌ "${buscado}" no está en stock`);
}

productosEnStock.splice(5, 1, "Detergente");

function listarStock(lista) {
  console.log("Stock disponible:");
  for (const producto of lista) {
    console.log(`Producto: ${producto}`);
  }
  console.log(`Total: ${lista.length} productos`);
}

listarStock(productosEnStock);

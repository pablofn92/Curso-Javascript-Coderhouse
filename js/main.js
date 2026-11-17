// Simulador: Lista de productos y sus respectivos precios de venta.
class Producto {
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id;
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.categoria = categoria.toLowerCase();
    this.stock = parseInt(stock);
  }

  // Aplico un método para sumar el IVA al precio de lista del producto y posteriormente aplicar un descuento para obtener el precio final del mismo.
  sumarIva() {
    this.precio *= 1.21;
  }
  
  aplicarDescuento(descuento) {
    this.precio *= 1 - descuento / 100;
  }

}
const productos = [];

  productos.push(new Producto(0, "Shampoo", 3000, "Higiene", 10));
  productos.push(new Producto(1, "Acondicionador", 3500, "Higiene", 8));
  productos.push(new Producto(2, "Desengrasante", 2000, "Limpieza", 12));
  productos.push(new Producto(3, "Rollo de cocina", 1800, "Limpieza", 15));
  productos.push(new Producto(4, "Desinfectante", 1500, "Limpieza", 0));
  productos.push(new Producto(5, "Jabón de tocador", 1200, "Higiene", 20));

console.log('Precio de lista:');
console.table(productos);

// Aplico IVA y descuento a cada producto
for (const producto of productos) {
  producto.sumarIva();
  producto.aplicarDescuento(10);
}

// Muestro el precio final de cada producto
console.log('Precio final (con IVA y descuento aplicado):');
console.table(productos);

// Se aplica lo aprendido en clase 6

// Busco un producto por nombre
const buscado = productos.find(producto => producto.nombre === "desengrasante");
console.log("Producto buscado:", buscado);

// Filtro los productos que están en stock
const disponibles = productos.filter(producto => producto.stock > 0);
console.log("Productos en stock:", disponibles);

// Calculo el valor total del stock
const total = productos.reduce((acc, producto) => acc + producto.precio * producto.stock, 0);
console.log("Valor total del stock: $" + total);

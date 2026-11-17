// Simulador: Lista de productos y sus respectivos precios de venta.
class Producto {
  constructor(id, nombre, precio, categoria) {
    this.id = id;
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.categoria = categoria.toLowerCase();
  }

  // Método para sumar el IVA al precio de lista del producto y posteriormente aplicar un descuento para obtener el precio final del mismo.
  sumarIva() {
    this.precio *= 1.21;
  }
  
  aplicarDescuento(descuento) {
    this.precio *= 1 - descuento / 100;
  }

}
const productos = [];

  productos.push(new Producto(0, "Shampoo", 3000, "Higiene"));
  productos.push(new Producto(1, "Acondicionador", 3500, "Higiene"));
  productos.push(new Producto(2, "Desengrasante", 2000, "Limpieza"));
  productos.push(new Producto(3, "Rollo de cocina", 1800, "Limpieza"));
  productos.push(new Producto(4, "Desinfectante", 1500, "Limpieza"));

console.log('Precio de lista:');
console.table(productos);

// Aplicar IVA y descuento a cada producto
for (const producto of productos) {
  producto.sumarIva();
  producto.aplicarDescuento(10);
}

// Mostrar el precio final de cada producto
console.log('Precio final (con IVA y descuento aplicado):');
console.table(productos);

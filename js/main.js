// Simulador: e-commerce
let productoId = 0;

class Producto {
  constructor(id, nombre, precio, categoria, imagen, descripcion, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.categoria = categoria;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.stock = parseInt(stock);
  }

  sumarIva() {
    this.precio *= 1.21;
  }

  aplicarDescuento(descuento) {
    this.precio *= 1 - descuento / 100;
  }
}

const productosGuardados = JSON.parse(localStorage.getItem("productos"));
const productos = [];

if (productosGuardados && productosGuardados.length > 0) {

  for (const item of productosGuardados) {
    const { id, nombre, precio, categoria, imagen, descripcion, stock } = item;
    productos.push(new Producto(id, nombre, precio, categoria, imagen, descripcion, stock));
  }
  productoId = productos.length;
} else {

  productos.push(new Producto(productoId++, "Shampoo", 3000, "Higiene", "./img/shampoo.jpg", "Shampoo para cabello suave", 0));
  productos.push(new Producto(productoId++, "Acondicionador", 3500, "Higiene", "./img/acondicionador.jpg", "Acondicionador hidratante", 8));
  productos.push(new Producto(productoId++, "Desengrasante", 2000, "Limpieza", "./img/desengrasante.jpg", "Desengrasante para superficies", 12));
  productos.push(new Producto(productoId++, "Rollo de cocina", 1800, "Limpieza", "./img/rollo-cocina.jpg", "Rollo de papel para cocina", 15));
  productos.push(new Producto(productoId++, "Desinfectante", 1500, "Limpieza", "./img/desinfectante.jpg", "Desinfectante para superficies", 10));
  productos.push(new Producto(productoId++, "Jabón de tocador", 1200, "Higiene", "./img/jabon-tocador.jpg", "Jabón de tocador para piel sensible", 20));

  for (const producto of productos) {
    producto.sumarIva();
    producto.aplicarDescuento(10);
  }

  localStorage.setItem("productos", JSON.stringify(productos));
}

let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function imprimirProductosEnHTML(listaProductos) {
  const containerProductos = document.getElementById("productos");
  containerProductos.innerHTML = "";

  for (const producto of listaProductos) {

    const { nombre, precio, imagen, descripcion, stock } = producto;

    const card = document.createElement("article");
    card.className = "card";

    const sinStock = stock <= 0;

    card.innerHTML = `
      <h3>${nombre}</h3>
      <img src="${imagen}" alt="${descripcion}" />
      <p>$${precio.toFixed(2)}</p>
      <button class="card-boton" ${sinStock ? "disabled" : ""}>
        ${sinStock ? "Sin stock" : "Agregar al carrito"}
      </button>
    `;

    containerProductos.append(card);

    const cardBtn = card.querySelector(".card-boton");
    cardBtn.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });
  }
}

function agregarAlCarrito(producto) {

  const itemExistente = carrito.find((item) => item.id === producto.id);

  if (itemExistente) {
    itemExistente.cantidad++;
  } else {

    const { id, nombre, precio } = producto;
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }

  guardarCarrito();
  imprimirCarrito(carrito);
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter((item) => item.id !== id);
  guardarCarrito();
  imprimirCarrito(carrito);
}

function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  imprimirCarrito(carrito);
}

function imprimirCarrito(array) {
  const contenedorCarrito = document.getElementById("carrito");
  contenedorCarrito.innerHTML = "";

  if (array.length === 0) {
    contenedorCarrito.innerHTML = '<p class="carrito-vacio">-- El carrito está vacío --</p>';
    return;
  }

  let total = 0;

  for (const elemento of array) {

    const { id, nombre, precio, cantidad } = elemento;
    const subtotal = precio * cantidad;
    total += subtotal;

    const div = document.createElement("div");
    div.innerHTML = `
      <p>${nombre} (x${cantidad}) - $${subtotal.toFixed(2)}</p>
      <button class="btn-eliminar">Eliminar</button>
    `;


    div.querySelector(".btn-eliminar").addEventListener("click", () => {
      eliminarDelCarrito(id);
    });

    contenedorCarrito.append(div);
  }


  const footerCarrito = document.createElement("div");
  footerCarrito.innerHTML = `
    <p><strong>Total: $${total.toFixed(2)}</strong></p>
    <button id="btn-vaciar">Vaciar carrito</button>
  `;

  footerCarrito.querySelector("#btn-vaciar").addEventListener("click", vaciarCarrito);
  contenedorCarrito.append(footerCarrito);
}

const formAgregarProducto = document.getElementById("form-agregar-producto");
formAgregarProducto?.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("input-nombre").value;
  const precio = document.getElementById("input-precio").value;
  const imagen = document.getElementById("input-imagen").value;
  const descripcion = document.getElementById("input-descripcion").value;
  const stock = document.getElementById("input-stock").value;
  const categoria = document.getElementById("input-categoria").value;

  const nuevoProducto = new Producto(productoId++, nombre, precio, categoria, imagen, descripcion, stock);
  nuevoProducto.sumarIva();
  nuevoProducto.aplicarDescuento(10);

  productos.push(nuevoProducto);
  localStorage.setItem("productos", JSON.stringify(productos));

  imprimirProductosEnHTML(productos);
  formAgregarProducto.reset();
});

const inputBusqueda = document.getElementById("input-busqueda");
inputBusqueda?.addEventListener("input", () => {
  const busqueda = inputBusqueda.value.trim().toLowerCase();

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda)
  );

  imprimirProductosEnHTML(productosFiltrados);
});

document.getElementById("form-busqueda")?.addEventListener("submit", (event) => {
  event.preventDefault();
});

imprimirProductosEnHTML(productos);
imprimirCarrito(carrito);

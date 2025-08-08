const productos = [
  {
    id: 1,
    nombre: "televisor",
    precio: 10000,
  },
  {
    id: 2,
    nombre: "celular",
    precio: 6500,
  },
  {
    id: 3,
    nombre: "tablet",
    precio: 8000,
  },
];

const carrito = [
  {
    producto: {
      id: 1,
      nombre: "televisor",
      precio: 10000,
    },
    cantidad: 3,
  },
  {
    producto: {
      id: 2,
      nombre: "celular",
      precio: 6500,
    },
    cantidad: 2,
  },
];
const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito");

// creando los elementos dinamicamente
productos.forEach((producto) => {
  const divProducto = document.createElement("div");
  divProducto.innerHTML = `
    ${producto.nombre} - $${producto.precio}
    <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
  `;
  contenedorProductos.appendChild(divProducto);
});

// definir los escuchadores de eventos
document.querySelectorAll(".btn-agregar").forEach((btn) => {
  btn.addEventListener("click", () => {
    agregarProducto(Number(btn.getAttribute("data-id")));
  });
});

function agregarProducto(idProducto) {
  contenedorCarrito.innerHTML = "";

  incrementarCantidad(idProducto);

  const li = document.createElement("li");
  const detalle = carrito.find((detalle) => detalle.producto.id === idProducto);

  if (!detalle) {
    const producto = productos.find((producto) => producto.id === idProducto);
    carrito.push({ producto, cantidad: 1 });
    li.innerText = `${producto.nombre} (x${1})`;
    contenedorCarrito.appendChild(li);
    return;
  }

  li.innerText = `${detalle.producto.nombre} (x${detalle.cantidad})`;

  contenedorCarrito.appendChild(li);
}

function incrementarCantidad(idProducto) {
  const detalle = carrito.find((detalle) => detalle.producto.id === idProducto);
  if (!detalle) {
    return;
  }
  detalle.cantidad++;
}

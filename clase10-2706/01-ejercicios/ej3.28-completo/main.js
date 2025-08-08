const productsData = [
  {
    id: 1,
    name: "Mochila",
    price: 20,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Remera manga larga",
    price: 40,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    name: "Campera",
    price: 60,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    name: "Pulsera",
    price: 15,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
];

let cart = [];

const productsContainer = document.getElementById("products");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout");

function displayProducts() {
  productsContainer.innerHTML = "";

  productsData.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product-card");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
    `;

    productsContainer.appendChild(productElement);
  });

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}

function addToCart(productId) {
  const product = productsData.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <span>$${item.price * item.quantity}</span>
      <button class="remove-btn" data-id="${item.id}">Eliminar</button>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });

  cartTotal.textContent = total.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  checkoutButton.textContent = "Procesando compra...";
  checkoutButton.disabled = true;

  setTimeout(() => {
    alert("Compra realizada");
    cart = [];
    updateCart();
    checkoutButton.textContent = "Realizar compra";
    checkoutButton.disabled = false;
  }, 2000);
}

checkoutButton.addEventListener("click", checkout);

displayProducts();

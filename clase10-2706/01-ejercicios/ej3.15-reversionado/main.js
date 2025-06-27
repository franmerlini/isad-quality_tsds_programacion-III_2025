// ------------------- Elementos -----------------------

// const button = document.querySelector("button");
// const button = document.getElementById("addTaskButton");
const button = document.querySelector("#addTaskButton");
const input = document.getElementById("taskInput");
const body = document.getElementById("root");

function mostrarMensaje() {
  console.log(input.value);
}

function mostrarContenido() {
  // 1. crear el elemento
  const li = document.createElement("li");

  // 2. asignando contenido
  li.innerHTML =
    '<input type="checkbox" />' +
    "<span>" +
    input.value +
    "</span>" +
    "<button>Eliminar</button>";

  // 3. agregar el elemento recien creado al documento
  body.appendChild(li);

  input.value = "";
}

// ------------------- Eventos -----------------------
button.addEventListener("click", mostrarContenido);

input.addEventListener("keypress", function (event) {
  if (event["key"] === "Enter") {
    mostrarContenido();
  }
});

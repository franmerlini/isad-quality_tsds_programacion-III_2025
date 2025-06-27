const numeros = document.getElementById("numeros");

for (let i = 1; i <= 100; i++) {
  const p = document.createElement("p");
  const span = document.createElement("span");
  span.classList.add("numero");
  span.textContent = i;
  p.innerHTML = `Número: ${span.outerHTML}`;
  numeros.appendChild(p);
}

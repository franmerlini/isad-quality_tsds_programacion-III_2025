const errorMessage = document.getElementById("error-message");
const tableBody = document.getElementById("user-table-body");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }

    const users = await response.json();

    tableBody.innerHTML = "";

    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    errorMessage.textContent =
      "No se pudieron cargar los datos: " + error.message;
  }
}

fetchUsers();

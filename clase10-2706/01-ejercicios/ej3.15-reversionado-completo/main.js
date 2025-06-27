// Elementos del DOM
const inputEl = document.getElementById("taskInput");
const buttonEl = document.getElementById("addTaskButton");
const listEl = document.getElementById("taskList");
const spinner = document.getElementById("spinner");

// Event listeners
inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

buttonEl.addEventListener("click", addTask);

// Arreglo de tareas
const tasks = [];

// Class Tarea
class Tarea {
  constructor(title, completed = false) {
    this.title = title;
    this.completed = completed;
  }
}

// Simulación de guardado de tareas
async function saveTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tareas guardadas:", tasks);
      resolve();
    }, 1000);
  });
}

// Agregar tarea
async function addTask() {
  const title = inputEl.value.trim();
  if (!title) return;

  const task = new Tarea(title);
  tasks.push(task);
  inputEl.value = "";

  await saveTasks();
  renderTasks();
}

// Renderizado de tareas
function renderTasks() {
  listEl.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <input type="checkbox" ${
        task.completed ? "checked" : ""
      } id="task-${index}">
      <span class="${task.completed ? "completed" : ""}">${task.title}</span>
      <button class="delete-btn">Eliminar</button>
    `;

    const checkbox = li.querySelector(`input[type="checkbox"]`);
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("change", () => toggleTask(index));
    deleteBtn.addEventListener("click", () => deleteTask(index));

    listEl.appendChild(li);
  });
}

// Manejo de tareas
async function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  await saveTasks();
  renderTasks();
}

async function deleteTask(index) {
  tasks.splice(index, 1);
  await saveTasks();
  renderTasks();
}

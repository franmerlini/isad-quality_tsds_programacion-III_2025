console.log("1. se comienza a leer el archivo");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("2. datos leidos correctamente");
    console.log("3. comienza la transformacion del objeto response");
    return response.json();
  })
  .then((users) => {
    console.log("4. datos transformados correctamente");
    const div = document.createElement("div");
    users.forEach((user) => {
      console.log(user);
      div.innerHTML += "<p>" + user.name + "</p>";
    });
    document.querySelector("#root").appendChild(div);
  });

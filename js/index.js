const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  let dados = { nome, email };

  let convertDados = JSON.stringify(dados);
  localStorage.setItem("lead", convertDados);

  let content = document.getElementById("content");

  let loading = `<p>Carregando...</p>`;

  let cadastrado = `<p>Cadastrado com sucesso!!</p>`;
  content.innerHTML = loading;

  setTimeout(() => {
    content.innerHTML = cadastrado;
  }, 3000);
});

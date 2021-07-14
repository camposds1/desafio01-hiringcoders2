// função para salvar email no localStorage
function salvarEmail() {
  var email = document.getElementById("campoEmail");

  var dados = JSON.parse(localStorage.getItem("dadosEmail"));

  if(dados == null) {
    localStorage.setItem("dadosEmail", "[]");
    dados = [];
  }

  var auxRegisto = {
    email: campoEmail.value
  }

  dados.push(auxRegisto);

  localStorage.setItem("dadosEmail", JSON.stringify(dados));

  alert("Email cadastrado com sucesso!")

  campoEmail.value = "";
}
const calcular = document.getElementById("calcular");

function imc() {
  const xpto = new XMLHttpRequest();
  xpto.open("POST", "http://localhost:8080/imc");
  xpto.setRequestHeader("Content-Type", "application/json");
  const resultadoID = document.getElementById("resultado");
  const nomeID = document.getElementById("nome");
  const alturaID = document.getElementById("altura");
  const pesoID = document.getElementById("peso");
  let resultado = resultadoID.value;
  let nome = nomeID.value;
  let altura = alturaID.value;
  let peso = pesoID.value;

  const body = JSON.stringify({
    nome: nome,
    peso: Number(peso),
    altura: Number(altura),
    resultado: resultado,
  });

  xpto.onload = () => {
    const IMCresult = JSON.parse(xpto.responseText);
    const messageResult = document.getElementById("resultado");
    messageResult.innerHTML = "";
    const messageParagrafo = document.createElement("p");
    const paragrafoTXT = document.createTextNode(IMCresult.message);
    messageParagrafo.appendChild(paragrafoTXT);
    messageResult.appendChild(messageParagrafo);
    console.log(IMCresult);
  };

  xpto.send(body);
}
calcular.addEventListener("click", imc);
console.log("Rodando!!!");

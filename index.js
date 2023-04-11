const calcular = document.getElementById('calcular');

function imc() {
    console.log("Rodando!!!")
    const xpto = new XMLHttpRequest();
    xpto.open("POST", "http://localhost:3000/imc")
    xpto.setRequestHeader("Content-Type", "application/json")
    const resultado = document.getElementById('resultado');
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    console.log('XOPXOTA')
    const body = JSON.stringify({
        nome: nome,
        peso: Number(peso),
        altura: Number(altura)
    });
    xpto.onload = () => {
        console.log(JSON.parse(xpto.responseText).message);
     resultado.textContent = JSON.parse(xpto.responseText).message   
    }
    xpto.send(body)

}

calcular.addEventListener("click", imc);
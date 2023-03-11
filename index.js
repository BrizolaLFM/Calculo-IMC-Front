const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== "" && altura !== "" && peso !== ""){
    
        let varAltura = altura;
        
        if(Number.isInteger(Number.parseFloat(altura))){
            varAltura = altura.toString().replace(/\D/g, "")/100;
        }
        
        const valorIMC = (peso / (varAltura * varAltura)).toFixed(2);
        
    let situacao = "";

if (valorIMC < 18.5){
    situacao = 'abaixo do peso.';
}else if (valorIMC < 25){
    situacao = 'no peso ideal.';
}else if (valorIMC < 30){
    situacao = 'levemente acima do peso.';
}else if (valorIMC < 35){
    situacao = 'com obesidade grau I. Atenção!';
}else if (valorIMC < 40){
    situacao = 'com obesidade grau II. Atenção!';
}else{
    situacao = 'com obesidade grau III. Cuidado!!!';
}

resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${situacao}`;

    }
    else{
        resultado.textContent = ("Favor preencher todos os campos!");
    }
}

calcular.addEventListener("click", imc);
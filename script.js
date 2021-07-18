const envia = document.getElementById('enviar')

function imc(){
    const nome = document.getElementById('name').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');
    let valor = (peso /(altura*altura)).toFixed(1);
    let classificacao = '';
    
    if(valor < 18.5 ){
        classificacao = 'e você está abaixo do peso, tenha cuidado!'
    }else if(valor >= 18.5 && valor <=24.9){
        classificacao = "e você está com peso ideal"
    }else if(valor >=25 && valor <=29.9){
        classificacao = "e você está com sobrepeso nível I"
    }else if(valor >=30 && valor <= 39.9){
        classificacao = "e você está com obesidade nível II, tenha cuidado"
    }else if(valor >40){
        classificacao = "e você está com obesidade nível III, é considerado grave, procure ajuda médica!"
    }else{
        classificacao = "e você precisa preencher todos os campos"
    }

    resultado.textContent = 'Olá,'+nome+'! O seu IMC é de '+valor+' '+classificacao
}
envia.addEventListener('click',imc)
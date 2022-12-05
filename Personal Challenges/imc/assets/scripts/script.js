const nameInput = document.querySelector('.name input');
const heightInput = document.querySelector('.height input');
const weightInput = document.querySelector('.weight input');
const result = document.querySelector('.result');
const button = document.querySelector('button');

function imcCalc(){
    let imcResult = weightInput.value / (heightInput.value * heightInput.value);
    imcResult = +imcResult.toFixed(2);   
    let rank = 0;
    if(imcResult < 19){
        rank = 'abaixo do peso';
    }else if(imcResult >= 19 && imcResult <= 25){
        rank = 'peso ideal';
    }else if(imcResult > 25 && imcResult <=30){
        rank = 'sobrepeso';
    }else if(imcResult > 30 && imcResult <=35){
        rank = 'obesidade grau I';
    }else if(imcResult > 35 && imcResult <=40){
        rank = 'obesidade grau II';
    }else if(imcResult > 40){
        rank = 'obesidade grau III';
    }
    result.innerText = `${nameInput.value} seu IMC é ${imcResult} e a sua classificação é ${rank} `;
    
}

button.addEventListener('click', imcCalc);



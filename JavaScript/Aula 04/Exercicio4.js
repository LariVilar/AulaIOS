let peso, altura, imc;
peso = prompt('coloque seu peso')
altura = prompt('coloque sua altura')
imc = (altura ** 2) / peso
if(imc >= 18.5 && imc <= 24.9){
    alert('Você esta saudavel')
} 
else{
    alert('Você não está saudavel')}
let operação = prompt('Escreva uma das 4 operações matematicas basicas').toLowerCase()
let numero3 = (prompt('Escolha um numero'))
let numero4 = (prompt('Escolha outro numero'))
let resultado;

switch (true) {
    case (operacao == 'adicao' || operacao == 'adição' || operacao == 'mais'):
        resultado = numero3 + numero4
        alert(`o total é ${resultado}`)
        break;

    case (operacao == 'subtracao' || operacao == 'subtração' || operacao == 'menos'):
        resultado = numero3 - numero4
        alert(`o total é ${resultado}`)
        break;

    case (operacao == 'multiplicacao' || operacao == 'multiplicação' || operacao == 'vezes'):
        resultado = numero3 * numero4
        alert(`o total é ${resultado}`)

        break;
    case (operacao == 'divisao' || operacao == 'divisão' || operacao == 'dividir'):
        resultado = numero3 / numero4
        alert(`o total é resultado é ${resultado}`)
        break;

    default:
        alert('não trabalhamos com essa operação ainda')
        break;
}
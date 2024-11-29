alert('Escreva um dos cupons que você quer utilizar')
let cupom = prompt("DESC1 = 5% de desconto\nDESC2 = 10% de desconto\nDESC3 = 15% de desconto\nDESC4 = 20% de desconto\nDESC5 = 25% de desconto").toUpperCase()
let desconto;

switch (cupom) {
    case 'DESC1':
        alert(`5% de desconto`)
        desconto = 1000 - (0.05 * 1000)
    alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
       
    break;
    case 'DESC2':
        alert(`10% de desconto`)
        desconto = 1000 - (0.10 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
        
        break;
    case 'DESC3':
        alert(`15% de desconto`)
        desconto = 1000 - (0.15 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
        
        break;
    case 'DESC4':
        alert(`20% de desconto`)
        desconto = 1000 - (0.20 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
        
        break;
    case 'DESC5':
        alert(`25% de desconto`)
        desconto = 1000 - (0.25 * 1000)
        alert(`O valor do produto foi de R$ 1000 para R$ ${desconto} com o cupom de desconto`)
       
        break;
    default:
        alert('Esse não é um cupom válido')
        break;
}
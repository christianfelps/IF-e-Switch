const leia = require('readline-sync');

let opcao, quantidade, valor;

console.log('Codigo do Produto    Produto  Preco Unitario');
console.log('  1                  Cachorro Quente      R$ 10.00       ')
console.log('  2                  X-Salada             R$ 15.00       ')
console.log('  3                  X-Bacon              R$ 18.00       ')
console.log('  4                  Bauru                R$ 12.00       ')
console.log('  5                  Refrigerante         R$ 8.00       ')
console.log('  6                  Suco de laranja      R$ 13.00       ')
opcao = leia.questionInt('Informe seu pedido')
quantidade = leia.questionInt('Quantos voce deseja')

switch(opcao){
    case 1:
        console.log('Cachorro quente');
        valor = 10.00
    break;
    case 2:
        console.log('X-Salada');
        valor = 15.00
    break;
    case 3:
        console.log('X-Bacon');
        valor = 18.00
    break;
    case 4:
        console.log('Bauru');
        valor = 12.00
    break;
    case 5:
        console.log('Refrigerante')
        valor = 8.00
    break;
    case 6:
        console.log('Suco de Laranja')
        valor = 13.00
    break;
    
}
console.log('Valor:','R$ ', quantidade * valor)





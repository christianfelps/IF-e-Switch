const leia = require('readline-sync');

console.log('Codigo do cargo     Cargo        Porcentual de reajuste ');
console.log('  1                 Gerente         10% ')
console.log('  2                 Vendedor        7% ')
console.log('  3                 Supervisor      9%')
console.log('  4                 Motorista       6% ')
console.log('  5                 Estoquista      5% ')
console.log('  6                 Tecnico de TI   8% ')

let opcao, colab, porcent, nome, salario, newsalario;
nome = leia.question('Nome do colaborador? ');
salario = leia.questionFloat('Salario')
opcao = leia.questionInt('Digite o codigo do colabarador');
switch(opcao){
    case 1:
    porcent = 0.1
    colab = "Gerente"
    newsalario = salario + (salario * porcent)
    break;
    case 2:
     porcent = 0.07
     colab = "Vendedor"
     newsalario = salario + (salario * porcent)
     break;
     case 3:
     porcent = 0.09
     colab = "Supervisor"
     newsalario = salario + (salario * porcent)
     break;
     case 4:
        porcent = 0.06
        colab = "Motorista"
        newsalario = salario + (salario * porcent)
        break;
    case 5:
        porcent = 0.05
        colab = "Estoquista "
        newsalario = salario + (salario * porcent)
        break;
    case 6:
    porcent = 0.08
    colab = "Tecnico de TI"
    newsalario = salario + (salario * porcent)
    break;
    default:
    console.log('Digite um numero de 1 a 6.')
}

console.log('Nome do Colaborador: ', nome );
console.log("Cargo: ",colab);
console.log('Salario', newsalario);
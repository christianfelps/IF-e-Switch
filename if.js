const leia = require('readline-sync');


let numA, numB, numC;

numA = leia.questionInt('\n Digite o valor do numero A: ');
numB = leia.questionInt('\n Digite o valor do numero B: ');
numC = leia.questionInt('\n Digite o valor do numero C: ');
resultado = numA + numB
if(resultado > numC){
    console.log(numA + ' + ' + numB + " = " + resultado + ' > ' + numC + '\n A soma de A + B e maior que C ')
}else if(resultado === numC ){
    console.log(numA + ' + ' + numB + " = " + resultado + ' = ' + numC + '\n A soma de A + B e igual que C ')
}else {
    console.log('A soma de A + B e menor que C ')
}

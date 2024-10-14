let nota1, nota2, media, faltas
nota1 = 10
nota2 = 5
faltas =  3
media = (nota1 + nota2)/2

if (media >= 7 && faltas < 6) {
    //true
    console.log(`Aluno aprovado`);
}else if (media >= 6.5 && faltas <= 5){
    console.log(`Aluno Ap. conselho`);
}else if (media >6 && faltas < 6){
    console.log(`Atividade de rep. ${media}`);
    media += 0.5
    console.log(media);
    
}else{

console.log(`Aluno reprovado`);

}
console.log(`fim`);

//
//
//
//

/* Faca um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, 
    calcule e imprima a sua classificação conforme a tabela

    media = (nota 1 + nota 2 + nota 3) / 3 
    c  lassificação:
    - media menor que 5, reprovação;
    - media entre 5 e 7, recuperação;
    - media acima de 7, passou de semestre;
*/

const nota1 = 7.8;
const nota2 = 8.2;
const nota3 = 9;

const mediaNota = (nota1 + nota2 + nota3) / 3;
console.log(mediaNota)

if(mediaNota < 5) {
    console.log('Reprovação');
} else if (mediaNota >= 5 && mediaNota < 7) {
    console.log('Recuperação');
} else  {
   console.log('Aprovado') 
}



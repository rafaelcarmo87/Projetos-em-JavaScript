/* O IMC- Indice de massa corporal é um criteio da organização mundial de saude para das umma indicação sobre a 
 condição de peso de uma pessoa adulta

 Formula IMC: 
 IMC = peso / (altura * altura)
    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua considiçao de acordo com a tabela

    IMC = 
    Abaixo de 18.5 Abaixo do peso;
    Entre 18.5 e 25 Peso normal;
    entre 25 e 30 Acima do Peso;
    Entre 30 e 40 Obeso;
    Acima de 40 Obesidade Grave;
*/

const peso = 109;
const altura = 1.84;

const imc = peso / (altura * altura)

if (imc <= 18.5) {
    console.log('Abaixo do Peso')
} else if(imc > 18.5 && imc <= 25) {
    console.log('Peso normal')
} else if(imc > 25 && imc <= 30) {
    console.log('Acima do Peso')
} else if(imc > 30 && imc <= 40) {
    console.log('Obeso')
} if(imc > 40) {
    console.log('Obesidade Grave')
}
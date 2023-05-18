
/* a function faz com que eu não precise repetir o código, em outro momento
    usando o function teste
    funções que não devolvem nada são chamadas de procedimentos.
*/
/* function teste(){
    console.log('teste');
 }

 teste(); */
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
//OBSERVAÇÂO - Math.pow é o mesmo que Elevado ao Quadrado

function calcularImc(peso, altura  ) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc <= 18.5) {
       return 'Abaixo do Peso';
    } else if(imc > 18.5 && imc <= 25) {
       return 'Peso normal';
    } else if(imc > 25 && imc <= 30) {
       return 'Acima do Peso';
    } else if(imc > 30 && imc <= 40) {
       return 'Obeso';
    } if(imc > 40) {
       return 'Obesidade Grave';
    }
    
}


function main() {
    const peso = 109;
    const altura = 1.84;

    const imc = calcularImc(peso, altura);
    console.log(classificarIMC(imc))
}

console.log(main);
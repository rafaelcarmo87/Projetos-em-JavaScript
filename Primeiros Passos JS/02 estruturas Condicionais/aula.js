/* OBSERVAÇÔES:

* Let  - variaveis que podem ser reatribuidas;

* Const - variaveis que não podem ser reatribuidas ou seja, são fixas;

* variavelBoleanos - são constantes definidas por Verdade = true  ou falso = false;

 * = - atribuição

 * == - igualdade (não distingue texto)
 * === - igualdade numérica




const numero = 10;
const numeroPar = numero % 2 === 0;

console.log(numeroPar);

if (numeroPar) {
    console.log('Par'); 
} else {
    console.log('Impar')
}

*/

const numero = 3;
const numDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O numero é inválido'); 
} else if (numDivisivelPor5){
    console.log('sim');
} else {
    console.log('Não');
}
/* 
    Faça um programa para calcular o valor de uma viagem. você terá 3 variáveis. Sendo elas:

    1- Preço combustivel;
    2- Gasto médio do Automóvel por KM;
    3- Distancia em Km da viagem;

    Imprima no console o valor que será gasto de combustivel para realizar esta viagem

*/

console.log('Imprima o valor gasto de combustivel para realizar esta viagem');

const precoCombustivel = 4.89; // "CONST" SÂO VALORES IMUTÀVEIS //
const kmPorLitros = 14;
const distanciaKm = 1580; 

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));    

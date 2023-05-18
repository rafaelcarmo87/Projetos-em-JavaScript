/* 
    Faça um programa para calcular o valor de uma viagem.
    Temos 5 Variáveis, sendo elas: 

    1- Preço Etanol;
    2-  Preço Gasolina;
    3- O Tipo de Combustivel utilizado;
    4- gasto médio de combustivel do automóvel por KM;
    5- Distancia em Km da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3.89;
const precoGasolina = 5.19;
const distanciaKm = 100;
const kmPorLitros = 10;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log (valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log (valorGasto.toFixed(2));
}


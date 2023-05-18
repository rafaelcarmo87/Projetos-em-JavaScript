/* Um Algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo 
    adequado.

    Codigo Pagamento:
    1- A vista Débito,  recebe 10% desconto;
    2- A vista Dinheiro ou Pix, 15% desconto;
    3- 2x, preço normal de etiqueta sem juros;
    4- Acima de 2x, preco normal de etiqueta mais 10% juros;
 */

const precoEtiqueta = 100;
const formaPagamento = 4;

if(formaPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if(formaPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if(formaPagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
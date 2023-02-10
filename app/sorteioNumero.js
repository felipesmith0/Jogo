/*Limite do Nmr Secret */
const maiorValor = 1000
const menorValor = 1
const numeroSecreto = numeroAleatorio()

/*Gerando Nmr Secret */
function numeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}
console.log(numeroSecreto)

/*Forma dinâm. de alterar o hmtl entre quanto o nmr secret está */
const elementoDeMenorValor = document.getElementById('numero-Min')
elementoDeMenorValor.innerHTML = menorValor

const elementoDeMaiorValor = document.getElementById('numero-Max')
elementoDeMaiorValor.innerHTML = maiorValor
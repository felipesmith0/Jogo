function verificaSeChuteTemValorValido(chute) {
    const numero = +chute            //conversao p nmr inteiro

    if (chuteForInvalido(numero)) { //O método Number.isNaN() determina se o valor passado é ou nao NaN(numero)
        numeroChute.innerHTML += `<div> Chute inválido </div>`
    }

    if (numeroForMiorOuMenorQueValorPermitido(numero)) {
        numeroChute.innerHTML += `<div> Chute inválido : o Secret Number está entre ${maiorValor} e ${menorValor} !</div>`

    }
    if (chuteCerto(numero)) {
        document.body.innerHTML =
            `<h2>Acertou.Parabéns!!</h2>
         <h3>O Secret Number era : ${numeroSecreto}</h3>
         <button id="botao" class="botaoo">Jogar novamente </button>
         `
    }

    /*DICA P JOGADOR */

    if (dicaUm(numero)) {
        numeroChute.innerHTML += `<div> O Secret Number é maior  <i class="fa-sharp fa-solid fa-arrow-up-long"></i></div> `
    }

    if (dicaDois(numero)) {
        numeroChute.innerHTML += `<div> O Secret Number é menor  <i class="fa-solid fa-arrow-down-long"></i></div> `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMiorOuMenorQueValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteCerto(numero) {
    return numero === numeroSecreto
}

function dicaUm(numero) {
    return numeroSecreto > numero
}

function dicaDois(numero) {
    return numeroSecreto < numero
}


/*Reiniciar o jogo */
document.body.addEventListener("click", e => {
    if (e.target.id == 'botao')
        window.location.reload()
})
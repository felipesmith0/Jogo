window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const numeroChute = document.getElementById('chute')
const recognition = new SpeechRecognition();  //estancia

recognition.lang = 'pt-Br';
recognition.start();                     //micro ligou


/*reconhece oq falamos mas ta "escondido" em  results*/

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript//adicionamo um evento e acessamos “results”, depois as duas arrays de índice “0” e por fim o “transcript” que é onde fica o conteúdo falado
    exibeChuteEmTela(chute)
    verificaSeChuteTemValorValido(chute)

}

function exibeChuteEmTela(chute) {
    numeroChute.innerHTML = `
<div>Você disse:</div>
<span class="box">${chute}</span> `

}

/*Quando o evento acabar ele recomeça ligando o micro novamente */
recognition.addEventListener("end",()=>recognition.start())
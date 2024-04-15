//CONTEUDO DOS BOTOES E DAS ABAS

const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function() {

    for (let k = 0; k < botoes.length; k++) {
      botoes[k].classList.remove('ativo');
      textos[k].classList.remove('ativo');
    }

    botoes[i].classList.add('ativo');
    textos[i].classList.add('ativo');
  }
}

// CONTEUDO DO CONTADOR DE TEMPO

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T23:59:59");

let tempoAtual = new Date();
let tempoFinal = tempoObjetivo1 - tempoAtual;

function calculaTempo(tempoObjetivo) {
  
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);22222222

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  
  return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}

contadores[0].textContent = calculaTempo(tempoObjetivo1);





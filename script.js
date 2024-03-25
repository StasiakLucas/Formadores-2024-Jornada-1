const botoes = document.querySelectorAll('.botao');
const textos = document.querySelectorAll('.aba-conteudo');

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T23:59:59");
const tempoAtual = new Date();

for(let i=0; i < botoes.length; i++) {
  botoes[i].onclick = function() {
    
    for(let k= 0; k < botoes.length; k++) {
      botoes[k].classList.remove('ativo');
      textos[k].classList.remove('ativo');
    }
    
    botoes[i].classList.add('ativo');
    textos[i].classList.add('ativo');
  }
}

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
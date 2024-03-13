const botoes = document.querySelectorAll('.botao');

for(let i=0; i < botoes.length; i++) {
  botoes[i].onclick = function() {
    
    for(let k= 0; k < botoes.length; k++) {
      botoes[k].classList.remove('ativo');
    }
    
    botoes[i].classList.add('ativo');
  }
}
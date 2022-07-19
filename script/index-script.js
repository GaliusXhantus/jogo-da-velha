const buttons = document.querySelectorAll('main table tr td button');
const resetar = document.querrySelector('main button');

let jogador = 'x';

function mudarJogador(){
    if (jogador === 'x'){
        return jogador = 'o';
    }
    else {return jogador = 'x';}
}

function resetarTela(event){
    resetar.addEventListener('click', ()=>{
        return(event.innerHTML = '');
    })
}

function jogo(){
    for (const button of buttons){
        button.addEventListener('click', ()=> {
            button.innerHTML = jogador;
            resetarTela(button);
            mudarJogador();
        });
    };
}

jogo()
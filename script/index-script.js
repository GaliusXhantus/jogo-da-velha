const buttons = document.querySelectorAll('button');

let jogador = 'x';

function mudarJogador(){
    if (jogador === 'x'){
        return jogador = 'o';
    }
    else {return jogador = 'x';}
}


function jogo(){
    for (const button of buttons){
        button.addEventListener('click', ()=> {
            button.innerHTML = jogador;
            mudarJogador();
        });
    };
}

jogo()
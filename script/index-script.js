//import { arrayVencedor } from "./array-vencedor";


const buttons = document.querySelectorAll('main table tr td button');
const resetar = document.querySelector('main > button');
const span = document.querySelector('main p span')

let jogador = 'x';

function mostrarJogador(){
    return span.innerHTML = jogador;
}

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

//function vencedor(posicao){
//    let arrayJogo = [buttons[posicao]];
//
//}

function jogo(){
    for (const button of buttons){
        button.addEventListener('click', ()=> {
            button.innerHTML = jogador;
            mudarJogador();
            mostrarJogador();
//            vencedor(button);
            resetarTela(button);
        });
    };
}

jogo();
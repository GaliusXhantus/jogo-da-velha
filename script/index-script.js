// import { arrayVencedor } from "./array-vencedor";


const buttons = document.querySelectorAll('main table tr td button');
const resetar = document.querySelector('main > button');
const span = document.querySelector('main p span');

let jogador = 'x';

function mostrarJogador(event){

    if(event.innerHTML === ''){
        event.innerHTML = jogador;
        mudarJogador();
    }
    else{
        return false
    }
}

function jogando(){

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

//function vencedor(){
//
//    if (buttons[1] === buttons[2] && buttons[2] === buttons[3]){
//        return console.log('hello')
//    }
//    else{
//        return false
//    }
//
//}

function jogo(){
    for (const button of buttons){
        button.addEventListener('click', ()=> {
            mostrarJogador(button);
            jogando();
  //          vencedor();
            resetarTela(button);
        });
    };
}

jogo();
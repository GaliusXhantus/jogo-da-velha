//import { arrayVencedor } from "./array-vencedor";

let arrayVencedor = [
    [[0], [1], [2]],
    [[3], [4], [5]],
    [[6], [7], [8]],
    [[0], [3], [6]],
    [[1], [4], [7]],
    [[2], [5], [8]],
    [[0], [4], [8]],
    [[2], [4], [6]]
];


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
        return false;
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
//    for (const array of arrayVencedor) {
//        if (buttons[array[0]].innerHTML === buttons[array[1]].innerHTML && buttons){
//            return console.log('hello');
//        }
//    };
//}

function jogo(){
    for (const button of buttons){
        button.addEventListener('click', ()=> {
            mostrarJogador(button);
            jogando();
 //           vencedor();
            resetarTela(button);
        });
    };
}

jogo();
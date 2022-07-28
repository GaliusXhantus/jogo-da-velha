//import { arrayVencedor } from "./array-vencedor";

const arrayVencedor = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const buttons = document.querySelectorAll('main table tr td button');
const resetar = document.querySelector('main > button');
const span = document.querySelector('main p span');

let jogador = 'x';

function mostrarJogador(event){

    if (vencedor()){
        return false;
    }
        
    else{
        if(event.innerHTML === ''){
            event.innerHTML = jogador;
            mudarJogador();
            jogando();
        }
    }
}

function mudarJogador(){
    
    if (jogador === 'x'){ 
        return jogador = 'o';
    }
    else {return jogador = 'x';}
    
}

function jogando(){

        return span.innerHTML = jogador;        
}



function resetarTela(event){
    resetar.addEventListener('click', ()=>{
        event.innerHTML = '';
        jogador = 'x';
        jogando();
    })
}

function vencedor(){

    for (const array of arrayVencedor) {

        if(buttons[array[0]].innerHTML !== '' && buttons[array[1]].innerHTML !== '' && buttons[array[2]].innerHTML !== ''){
            if (buttons[array[0]].innerHTML === buttons[array[1]].innerHTML && buttons[array[1]].innerHTML === buttons[array[2]].innerHTML){
                return true;
            }

        else { return false;}
    }};
}

function jogo(){
    for (const button of buttons){
        button.addEventListener('click', ()=> {
            mostrarJogador(button);
            resetarTela(button);
        });
    };
}

jogo();
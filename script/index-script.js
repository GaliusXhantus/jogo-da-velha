const arrayVencedor = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const buttons = document.querySelectorAll('.jogo section button');
const resetar = document.querySelector('main > button');
const span = document.querySelector('main p span');

let jogador = 'x';

function mostrarJogador(event){

    if(event.innerHTML === ''){
        event.innerHTML = jogador;
        mudarJogador();
        jogando();
        checarVencedor();
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

    let vencedor = arrayVencedor.some((array) =>{
        return array.every( (linha) =>{
            return buttons[linha].innerHTML.includes(jogador);
        })
    })

    return vencedor;
}

function finalDoJogo(){
    return buttons.forEach((button) =>{
        button.innerHTML = '';
    })
}

function checarVencedor(){
    if(vencedor()){
        finalDoJogo();
    }else{
        return true;
    }
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

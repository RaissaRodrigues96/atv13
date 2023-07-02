import { getTabuleiro } from "./state.js";

const eTabuleiro = document.querySelector(".tabuleiro");
//const disco = document.querySelector(".disco");

let arrastado = null;

setup();

function comecaArrastar(evento){
    arrastado = evento.target;
}

function recebeAlgo(evento){
     if (arrastado && evento.target.classList.constains('casa')){
        const posDisco = arrastado.dataset.posicao;
        const posCasa = evento.target.dataset.posicao;
        console.log('tentar mover o disco de $(posDisco) para $(posCasa)')};
        if (mover(posDisco.posCasa)){
            console.log('disco foi de $(posDisco) para $(posCasa)');
        };

        evento.target.appendChild(arrastado);
        arrastado.dataset.posicao = posCasa;
        arrastado = null;
     } else{
        console.log('Não pode mover o de $(posDisco) para $(posCasa)')};

        function passouPorCima(evento) {
            evento.preventDefault();
          }
     

function passouPorCima(evento){
    evento.preventDefault();
}
 
function setup(){
    const tabuleiro= getTabuleiro();
    for(let i = 0;i < tabuleiro.length;i++){
        const casa= tabuleiro[i];
        const eCasa = criaCasa(casa,i);
        eTabuleiro.appendChild(eCasa);
        
    }
}

function criaCasa(casa,k){
    const eCasa = document.createElement('div');
    eCasa.dataset.posicao = k;
    eCasa.classList.add('casa');
    eCasa.addEventListener('dragover',passouPorCima);
    eCasa.addEventListener('drop',recebeAlgo);
    if(casa != null){
        const eDisco = criarDisco(casa,K);
        eCasa.appendChild(eDisco);
    }
    return eCasa;
}

function criarDisco(casa, k){evento.target.classList.add('casa')
    const eDisco =  document.createElement('div');
    eDisco.dataset.posicao = k;
    eDisco.classList.add('disco');
    eDisco.addEventListener('dragstart', comecaArrastar);
    if(casa === 'p'){
       eDisco.classList.add('preto');
    }
    else{
        eDisco.classList.add('branco');
    }
    return eDisco;
}

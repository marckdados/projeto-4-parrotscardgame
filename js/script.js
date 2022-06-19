const parrots = ['bobrossparrot','explodyparrot','fiestaparrrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot'];
let numeroCartas;

function iniciarJogo(){
     numeroCartas = prompt("Escolha um número de cartas de 4 até 14 !");

    if(numeroCartas < 4 || numeroCartas > 14){
        alert('Número de cartas inválido, digite algum número de 4 à 14 !');
        iniciarJogo();
    }else{
        colocarCartas();
    }
}
function colocarCartas(){
    for(let i = 0; i < numeroCartas; i++){
        document.querySelector('.baralho').innerHTML += 
        `
        <li onclick="selecionarCarta(this)">
            <img class="front" src="./images/front.png" alt="">
            <img class="back escondido" src="./images/${parrots[1]}.gif" alt="">
        </li>  
        `
    }
}

function selecionarCarta(carta){
    carta.classList.toggle('virar')
    carta.querySelector('.back').classList.toggle('escondido');
    carta.querySelector('.front').classList.toggle('escondido');
    setTimeout(()=>{
        carta.classList.toggle('virar')
        carta.querySelector('.back').classList.toggle('escondido');
        carta.querySelector('.front').classList.toggle('escondido');
    },1000) 
}   
iniciarJogo();
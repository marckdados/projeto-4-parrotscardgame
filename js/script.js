const parrots = ['bobross','explody','fiesta','metal','revertit','triplets','unicorn'];
let numeroCartas;
let cartas = [];
let contador = 0;
let par = 0;
let jogada1;
let jogada2;
let tempo = 0;
let temporizador;

function embaralharCartas(){
    for(let i = 0; i < numeroCartas/2; i++){
        for(let j = 0; j < 2; j++){
            cartas.push(parrots[i]);
        }
    }
    cartas.sort(comparador);
}
function comparador(){
    return Math.random() - 0.5;
}
function iniciarJogo(){
     numeroCartas = prompt("Escolha um número de cartas de 4 até 14 !");

    if(numeroCartas < 4 || numeroCartas > 14){
        alert('Número de cartas inválido, digite algum número de 4 à 14 !');
        iniciarJogo();
    }else{
        embaralharCartas();
        colocarCartas();
    }
    temporizador = setInterval(contar, 1000);
}
function colocarCartas(){
    for(let i = 0; i < cartas.length; i++){
        document.querySelector('.baralho').innerHTML += 
        `
        <li onclick="selecionarCarta(this)">
            <img class="front" src="./images/front.png" alt="">
            <img id="${cartas[i]}" class="back escondido" src="./images/${cartas[i]}parrot.gif" alt="">
        </li>  
        `
    }
}

function selecionarCarta(carta){
    if(carta.classList.contains('virar')){
        return
    }
    carta.classList.add('virar')
    carta.querySelector('.back').classList.remove('escondido');
    carta.querySelector('.front').classList.add('escondido');
    contador++;

    const primeiro = jogada1 == undefined;
    if(primeiro){
        jogada1 = carta;
        return;
    }
    
    jogada2 = carta;
    verificarCarta(carta);
} 

function verificarCarta(){
   
    if(jogada1.innerHTML == jogada2.innerHTML){
        par++;
    }

    const errado = jogada1.innerHTML != jogada2.innerHTML;

    if(errado){
        setTimeout(retornaOrigem,1000,jogada1,jogada2);
    }

    jogada1 = undefined;
    jogada2 = undefined;
    venceu();
}


function retornaOrigem(jogada1, jogada2){
    jogada1.classList.remove("virar");
    jogada1.querySelector('.back').classList.add('escondido');
    jogada1.querySelector('.front').classList.remove('escondido');
    jogada2.classList.remove("virar");
    jogada2.querySelector('.back').classList.add('escondido');
    jogada2.querySelector('.front').classList.remove('escondido');
}

function venceu(){
    if(par !== numeroCartas/2){
        return;
    }else{
        clearInterval(temporizador);
        setTimeout(alerta,1000)
    }
}

function alerta(){
    alert(`Você venceu em ${contador} jogadas e em ${tempo} segundos!`);
    reiniciarJogo();
}

function reiniciarJogo(){
    const resposta = prompt('Deseja reiniciar o jogo ? responda com "sim" ou "não"');
    if(resposta === "sim"){
        window.location.reload(true);
    }
    return;
}

function contar(){
    tempo++;
    document.querySelector('.contador').innerHTML = `${tempo}s`;
}

iniciarJogo();
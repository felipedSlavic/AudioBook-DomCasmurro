// Const é usada para declara uma variável no JS, uma que não muda
// Conveção de Variáveis (camelCase)
// Selecionei e criei a variável, ela é correlacionada com  a variável de botao do Play Pause

const  botaoPlayPause = document.getElementById('play-pause');
const  botaoProximoCap = document.getElementById('proximo');
const  botaoCapAnterior = document.getElementById('anterior');
const  audio = document.getElementById('audio-capitulo');
const  textoCapitulo = document.getElementById('capitulo');
const qtdCapitulos = 10;


// LET pois é uma variável, que pode mudar, não é CONSTANTE

let taTocando = false;
let capituloAtual = 1;

function tocarFaixa() {
    // INstruções da função
    // Ex:
    // console.log('Clicou!');
    // alert('clicou!')
    audio.play();
    taTocando = true;

    botaoPlayPause.classList.add('tocando');
}

function pausarFaixa(){
    audio.pause();
    taTocando = false;

      botaoPlayPause.classList.remove('tocando');
}


// UM = é atribuição
// DOIS == é uma comparação (comparar valor)
// TRES === é uma comparação, extritamente igual (comparar valor e tipagem da variável)


function tocarOuPausar(){
    if(taTocando === true){
        pausarFaixa();
    }else{
        tocarFaixa();
    }
}


function proximoCapitulo(){
     pausarFaixa();

    if(capituloAtual < qtdCapitulos){
        capituloAtual = capituloAtual + 1;
    }else{
        capituloAtual = 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3"
    textoCapitulo.innerText = "Capítulo " + capituloAtual;
}

function capituloAnterior(){
     pausarFaixa();

    if(capituloAtual === 1){
        capituloAtual = qtdCapitulos;
    }else{
        capituloAtual = capituloAtual - 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3"
    textoCapitulo.innerText = "Capítulo " + capituloAtual;
}

// ADD EVENT LISTENER, VAI ADICIONAR UM EVENTO
// QUAL O EVENTO?
// (' click') clicar
// QUANDO CLICAR OCORRERRÁ UMA FUNÇLÃO QUE IRÁ EXECUTAR O COMANDO

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximoCap.addEventListener('click' , proximoCapitulo);
botaoCapAnterior.addEventListener('click' , capituloAnterior);



// COMANDO PARA EXIBIR NO CONSOLE ALGO
// console.log(botaoPlayPause);
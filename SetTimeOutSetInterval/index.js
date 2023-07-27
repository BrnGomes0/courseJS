/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução de código em intervalos de tempo especificados.
Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos chave para usar com JavaScript são:

setTimeOut (function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado em milisegundos.

setInterval (function, miliseconds)
-> É o mesmo que setTimeOut(), mas repete a execução da função continuamente.
*/

// SetTimeOut --> Ele vai começar a executar após o tempo estimado (No caso 5000 milisegundos)
// function ativarContagem () {
//     document.getElementById('tempo').innerHTML = "Começou a contar!";
//     // Ativa a função apenas 1 vez quando der o tempo especificado
//     tempo = setTimeout(function() { 
//         document.getElementById('tempo').innerHTML = "Executou o setTimeout!";
//     }, 5000); 
// }



// function pararContagem () {
//     clearTimeout(tempo); // Parando a contagem do setTimeOut
//         // O setTimeOut não sera main executado. 
//     document.getElementById('tempo').innerHTML = "Parou a contagem!";
// }

function ativarContagem () {
    tempo  = setInterval(function() {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;
        document.getElementById('tempo').innerHTML = soma;

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = "Tempo Esgotado!";
            pararContagem();
        }
    }, 1000);
} 

function pararContagem () {
    clearInterval(tempo);
}
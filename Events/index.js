/* EVENTOS
Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondbclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válido para input
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disparado quando uma tecla é pressionada.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre o elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.
*/


function eventoClick () {
    alert('Acionou um evento de CLICK!');
    document.body.style.backgroundColor = "yellow"; // Após o clique no botão, o fundo da página ficará amarelo, ou seja, após um evento, acontecerá algo. (Manipulando Evento com JavaScript)
};

function eventoDbClick() {
     alert('Evento de clique duplo!');
     document.body.style.backgroundColor = "red";
}

function viraVermelho () {
    let div = document.getElementById("test");
    div.style.backgroundColor = "red";
}

function voltarAzul() {
    let div1 = document.getElementById("test");
    div1.style.backgroundColor = "blue"; 
}
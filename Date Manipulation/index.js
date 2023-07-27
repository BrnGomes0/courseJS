/* MANIPULAR DATAS EM JAVASCRIPT */


// COMANDO BASE PARA PEGAR A DATA: 
let data = new Date();
console.log(data); 

// PARA PEGAR O ANO
let ano  = data.getFullYear();
console.log(ano);

// PARA PEGAR O MÊS - DE 0 ATÉ 11 SENDO 0 O JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
console.log(mes + 1);

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
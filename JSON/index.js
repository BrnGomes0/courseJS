/* JSON

JSON significa JavaScript Object Notation que traduzido pro português fica algo como notação de objeto JavaScript.
Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.
Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.
Para trabalhar com JSON no JavaScript usamos dois métodos: 

JSON.parse() --> Converte texto no padrão JSON em objetos.
JSON.stringify() --> Converte objetos em texto padrão JSON
*/

// Car Object

// const car = {
//     brand: "Fiat",
//     model: "Uno", 
//     year: 2001
// }

// let text = JSON.stringify(car); // Convert object in Text

// document.getElementById('area').innerHTML = text; // HTML can't show an object because it can't understand what the object would be to show on the screen
// let obj = JSON.parse(text); // Convert text in object

// // Get a value abour object created
// console.log(obj.model ); // Show in console: 'Uno' --> Modelo car

function searchCEP () { 
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        document.getElementById('text').innerHTML = this.responseText;
    }
}
/* CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no JavaScript as Classes. As Classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no JavaScript isso é relativamente novo, por isso
mesmo os programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
Podem se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para contruibuir os objetos, as Classes no JavaScript usam o método chamado constructor() para fabricar os objetos.


*/
 
class Carro { // Nome de uma classe sempre precisa começar com letra maiúscula
    // Máquina que vai construir os objetos
        constructor(valor1, valor2, valor3) {
            this.marca = valor1;
            this.modelo = valor2;
            this.ano = valor3;   
        }
        
        // Method of Class
        buzina() {
            return `${this.modelo} Buzinou: Biiiiiiiiiiii`;
        }  
}


const uno  = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);

console.log(gol);

// Modificando Atributos

gol.ano = 1998;
console.log(gol);


/*Só possível instanciar um objeto após as classes que seu atributo está, se você tentar
instanciar antes, irá dar erro. */
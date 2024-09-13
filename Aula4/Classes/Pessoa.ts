export default class pessoa{
    nome: string;
    idade: number;
    hobbies: string[];
    constructor(nome: string, idade: number, hobbies: string[]){
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
    }
    apresentacao(){
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e gosto de ${this.hobbies.join(', ')}`);
    }
}

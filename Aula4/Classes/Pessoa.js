"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pessoa {
    constructor(nome, idade, hobbies) {
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
    }
    apresentacao() {
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e gosto de ${this.hobbies.join(', ')}`);
    }
}
exports.default = pessoa;

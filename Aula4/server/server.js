"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pessoa_1 = __importDefault(require("../Classes/Pessoa"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/pessoa', (req, res) => {
    const pessoa1 = new Pessoa_1.default('João', 25, ["jogar bola", "estudar", "trabalhar"]);
    const pessoa2 = new Pessoa_1.default('Maria', 30, ["jogar bola", "estudar", "trabalhar"]);
    const listapessoas = [pessoa1, pessoa2];
    res.json(listapessoas);
});
app.listen(port, () => {
    console.log(`api rodando na porta http://localhost:${port}`);
});

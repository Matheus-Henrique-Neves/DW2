"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm i prompt-sync
// npm i -D @types/prompt-sync
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function calcularArea(lado) {
    return lado * lado;
}
const numDigitado = Number(prompt("Digite um num: "));
const quadrado = calcularArea(numDigitado);
console.log(quadrado);

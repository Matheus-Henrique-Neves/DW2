// npm i prompt-sync
// npm i -D @types/prompt-sync
import PromptSync from 'prompt-sync'
const prompt = PromptSync()

function calcularArea(lado: number): number{
    return lado * lado
}

const numDigitado = Number(prompt("Digite um num: "))

const quadrado = calcularArea(numDigitado)
console.log(quadrado)
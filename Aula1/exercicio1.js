//var prompt = require('prompt-sync')();
import PromptSync from "prompt-sync";
var prompt=PromptSync()
let valorPrimario = Number(prompt("Qual sera o valor inicial? "))
let valor = valorPrimario
let porcentagem = Number(prompt("Qual a procentagem de taxa de lucro mensal? "))
let meses = 0
while (valor < valorPrimario * 3) {
    //valor=valor+(valor*porcentagem)
    valor += (valor * porcentagem)
    meses += 1
    console.log(`mes: ${meses} valor: ${valor.toFixed(2)}`)
}
let valorarrumado = valor.toFixed(2)
console.log("voce investiu um total de " + valorPrimario)
console.log("Voce demoraria um total de " + meses + " meses para conseguir o triplo do seu investimento")
console.log("O valor que vc ganhou depois desse tempo foi de " + valorarrumado)


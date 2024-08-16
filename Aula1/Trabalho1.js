import PromptSync from "prompt-sync";
var prompt=PromptSync()
let ValorDatabuada=prompt("qual o numero que vc deseja ver a tabuada? ")
let vaimutiplica=prompt("até que tabuada vc que que ele chegue ")
for (let index = 0; index <= vaimutiplica; index++) {
 console.log(`|${ValorDatabuada}| x |${index}| = `+"|"+ValorDatabuada*index+"|")
    //faze depois um jeito de ficar bonitinho a poha da taboada
    
}
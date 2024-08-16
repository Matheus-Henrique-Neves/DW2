
console.log("Olá mundo")

const a =10
let b = 20
const total = a + b

console.log(total)

if(total > 30){
    console.log('total > que 30')
} else {
    console.log('total <= 30')
}

const dia = 'segunda'

switch (dia.toLowerCase()) {
    case 'segunda':
    case 'quarta':
        console.log('aberto')
        break;
    default:
        console.log('meio aberto')
        break;
}

let idade = 18
let podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode'
// if(idade >= 18){
//     podeBeber = 'Pode beber'
// } else {
//     podeBeber = 'Não pode'
// }

const maiorIdade = true
const temCarteiraTrab = false
// && And / || Or
const podeAplicarVaga = maiorIdade && temCarteiraTrab

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let batata = 10
while(batata>1){
    batata=batata-1
    console.log("vc comeu 1 batata agora vc tem "+batata)
}
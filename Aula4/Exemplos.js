/*const pessoa1={
    nome: "joão",
    idade: 16,
    hobbies:["videogames","futebol","leitura","assistir tv"]
}*/
/*console.log(pessoa1.nome)
pessoa1.cpf="123.456.789-10"
console.log(pessoa1.cpf)
console.log(pessoa1.idade)
console.log(pessoa1.hobbies[0])
console.log(pessoa1.hobbies[1])
pessoa1.hobbies.push("jogar xadrez")
console.log(pessoa1.hobbies[2])
console.log(pessoa1.hobbies[3])
console.log(pessoa1.hobbies[4])
console.log(pessoa1)*/

function criarPessoa(nome,idade,hobbies){
    return{
        nome: nome,
        idade: idade,
        hobbies: hobbies
    }
}
/*const pessoa2=criarPessoa("Maria",20,["dançar","natação","cozinhar"])
console.log(pessoa2)
const pessoa3=criarPessoa("José",30,["pintura","música","teatro"])
console.log(JSON.stringify(pessoa3))
//{"nome":"José","idade":30,"hobbies":["pintura","música","teatro"]} --> JSON.parse() to return to object
const pessoa4=JSON.stringify(criarPessoa("Ana",25,["pintura","música","teatro"]))
console.log(pessoa4)
console.log(JSON.parse(pessoa4))*/

class Pessoa{
    constructor(nome,idade,hobbies,cpf){
        this.nome=nome
        this.idade=idade
        this.hobbies=hobbies
        this.cpf=cpf
    }
    Meapresente(){
        console.log(`Olá, eu sou ${this.nome}, tenho ${this.idade} anos e gosto de ${this.hobbies.join(", ")}`)
    }
}

const pessoa1 = new Pessoa("João", 16, ["videogames", "futebol", "leitura", "assistir tv"],"123.456.789-10") 
/*pessoa1.deiabunda="sim"*/
console.log(pessoa1)
pessoa1.Meapresente()




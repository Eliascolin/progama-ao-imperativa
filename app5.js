
const nome = "Jose da Silva"

let idade = 27

let peso = 83.5

let altura = 1.70 

let plano = true

let imc = peso/(altura*2)

console.log(`${nome} tem  ${idade} anos e seu indice de massa corporal e de ${imc}`)





function pessoCorporal(nome,idade,peso,altura,plano,imc){

const calculo = peso/(altura*2)



return nome + "tem " +  idade + 'anos e seu indice de massa corporal e de ' + imc + "e sue plano de saude e "  + plano

}


const resposta =  pessoCorporal('Carlos de souza', 28, 80.1, 1.76,'diamante')

console.log(resposta)











function cadastro(){

}
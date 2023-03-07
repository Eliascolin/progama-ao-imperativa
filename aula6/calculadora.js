 //1) Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.

 // 2) Crie uma função de soma, que deverá receber dois parâmetros e retornar a soma deles.


 function soma(num1,num2){

  return num1 + num2   
 }

// 3 Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao (num1,num2){

 return num1 - num2 

}


// 4 Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao (num1,num2){


    return num1 * num2 

    
}

// 5 Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao (num1,num2){
 
   return num1/num2
    
}

console.log ("-------------- Teste de Operações / Calculadora --------------")


console.log ("-------------- Teste de Operações / suma--------------")
let a = soma(5,2)

console.log(a)

console.log ("-------------- Teste de Operações / suntracao --------------")

let b = subtracao(4,3)

console.log(b)

console.log ("-------------- Teste de Operações / multiplicaçao --------------")

let c = multiplicacao (3,2)


console.log(c)

console.log ("-------------- Teste de Operações / diviçao --------------")

let d = divisao (3,0)

console.log(d)




function quadradoDoNumero(numero){

let resposta = multiplicacao(numero,numero)

    return resposta


}


let  e = quadradoDoNumero(5)

console.log(e)


function mediaDeTresNumeros(alum1,alum2,alum3){

    let suma = soma (alum1,alum2)

    let suma2 = soma (suma,alum3)

    let resultado = divisao(suma2,3)
    return resultado

}


let media = mediaDeTresNumeros(6,12,20)

console.log("o resultado e de",media)




function calculaPorcentagem(num1,num2){

    let a = multiplicacao(num1,num2)

    let b = divisao (a,100)

return `${b} por que ${num2}% de ${num1}`

}

let resposta = calculaPorcentagem (300,15)


console.log(resposta)

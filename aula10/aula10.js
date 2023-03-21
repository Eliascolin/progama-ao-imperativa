// let numero = 1

// numero = numero + 100

// numero += 100

// console.log(numero)


// let num = 0 

// while (num < 100){
//     num++;
//     console.log(`èste e  o numer ${num}`)
// }


// let nume2 = 0

// do {
//     nume2 += 2
//     console.log(`o numero È ${nume2}`)
// }while(nume2 < 20)


// for(let numero = 0; numero < 100; numero+=8){
// console.log(`o numero É ${numero}`)
// }


//https://docs.google.com/document/d/1QIU2rqez0lz2v_UneWFmgxEus6ERBcWHHW19YBHhVtA/edit
// 1) Crie uma função que solicite um valor
// por parâmetro e retorne os próximos 10 números.

// valor(1)
//   function valor(num){
  
//     let teste = num
  
//     while(teste <= num + 8){
//        teste++
//         console.log(teste)
//     }
// }



  // 2)imprima os números entre 5 e 20, saltando três de cada vez.
// let numero = 5

//   while(numero <= 20){
// numero+=3
// console.log(numero)
//}



/*
3) Escreva um programa que mostre a soma de todos os números entre 0 e 100
let numeros = 0
do{
numeros++
console.log(numeros)
}while(numeros<=100)*/


//O fatorial de um número é obtido pela multiplicação de todos os inteiros

function facturial (nume){
 let calulo = 1

 if (nume % 1 == 0){
  while (nume > 0){
  
    calulo = calulo * nume
     
    nume--
    
    console.log(nume)

  }
 }
else(console.log(`o numero ${nume} é impar`))

}

facturial(9)
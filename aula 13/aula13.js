
/*uma função chamada loopDePares que recebe um número como
parâmetro e faz um loop de 0 a 100, exibindo cada número de loop no console. Se o
número da iteração adicionado ao número passado pelo parâmetro for par, aparecerá no
console: "O número X é par".*/


function loopDePares (n){

    let num = n 

    while(num < 100){
     
        num++

        if(num % 2 ==0){
            console.log(`${num} é par`)
        }
        else(console.log(num))

    }
}

//loopDePares(8)


/*Você deve criar uma função chamada loopDeImpares que recebe um número e uma
palavra como parâmetro e faz um loop de 0 a 100, exibindo cada número de loop no
console. Em seguida, modifique o código para que, se esse número adicionado ao
número passado por parâmetro for ímpar, ele exiba a palavra passada por parâmetro no
console.*/

function loopDeImpares (n){

let num = n

while(num < 100){

    num++

if (num % 2 !== 0){

    console.log(`${num} é impar`)

}else( console.log(num))

}


}

//loopDeImpares(8)




/*Você deve criar uma função chamada somatório que recebe um número como
parâmetro e retorna a soma de todos os seus números anteriores, incluindo ao número
inserido. Exemplo:
● somatório(3) deve retornar 6 porque (1+2+3)*/

function somatório(n){
    let num = n
    let num2 = n  
  while(num > 0 ){
      console.log(num+num2)
      num--
 }
}

//somatório(3)



/*Você precisará criar uma função chamada newArray que receba um número como
parâmetro e retorne um novo array com tantos elementos quanto o número que você
passou para ele. Exemplo:
● newArray(5) deve retornar [1,2,3,4,5]
● newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]*/


function newArray(n){
let num = n
let array1 = []
do{
console.table(array1.unshift(num))
num--
}while(num>0)
}


//newArray(5)

/*Você precisará criar uma função chamada split que receba uma string e simule o
comportamento da função original. Se você não tiver certeza de como funciona, o
Google pode ajudar. Importante: você não pode usar String.split(). Exemplo:
● split(“ola”) deve retornar [”o”,”l”,”a”]
● split(“tchau”) deve retornar [“t”,“c”,”h”,”a”,”u”]*/



function split(palavra){

let separar = palavra.split('')

console.log(separar)



}

split('ola')


//https://drive.google.com/drive/folders/18mOkjQLWu5YGqa7szLLPDZT_UyX1B1kJ
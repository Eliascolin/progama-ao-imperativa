/*

operadores de string

operadores numerico


*/

"ola" + "mundo" //concatenaçao --> junçao de dois textos

console.log("ola " + "mundo")

"ola" - "mundo" // = NaN Not a Number --> javascrpst temta fazer a resta que nem um numero mas da esse erro 


console.log("2"-2) // javaScrips consegue forçar e da uma resposta numerica










                                               // equaçao do seguando grau







//funçoes --> reaproveitar o codigo


/*

1) a palavra function

2) nome da funçao

3) () entradas 

4 dentro de () PARAMETROS COM NOME DAS VARIAVEIS
 
*/


function calculoEquacaoDoSegundoGrau(a,b,c){

//calculo da funçao
const delta = b**2 - 4*b*c;

const raizDoDelta = delta**0.5

//saida
const x1 = (- b + raizDoDelta)/(2*a);

const x2 = (-b - raizDoDelta)/(2*a)

console.log(x1,x2)
     
}


calculoEquacaoDoSegundoGrau(-1,6,-9)


function quadrado (numero){

    return numero*numero
}


   const ola = quadrado(4)

   console.log(ola )

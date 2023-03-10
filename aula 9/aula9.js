// const pipoca = 10

// const macarrao = 8

// const carne = 15

// const feijao = 12 

// const brigadeiro = 8 


function microondas (comida,tempo){

    let prato = 0

    switch (comida){
        case "pipoca": prato = 10
        break
        case "macarrao": prato = 8
        break
        case "carne": prato = 15
         break
         case "feijao": prato = 12
         break
         case "brigadeiro": prato = 8
         break
         default: prato = 0
         break
    }
//Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
if(prato == 0) (
    console.log("prato nao existe")
)
//Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";

 else if(tempo < prato ){
    console.log("tempo insuficiente")
}
//Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
else if(tempo > prato*2 && tempo < prato*3){
    console.log('queimou')
}

//Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”

else if(tempo >= prato*3){
    console.log('kabum')
}

else(console.log("prato feito"))
};

microondas('arepa',31)

//  pipoca = 10
//  macarrao = 8
//  carne = 15
//  feijao = 12 
//  brigadeiro = 8 
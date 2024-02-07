//&& = (E) duas condições verdadeiras ou falsas 
//OR = (OU) uma das condições verdadeira
//!  = (NÃO) é uma condição negativa 
// Switch/Case/Break/Default 

let NomeMotorista = "Clendson"
let idade = 16;
let CarteiraMotorista = true;
let CNH = true;

console.log ("1° Habilitação do Sr.: " + NomeMotorista );
    if ((idade >=18 ) && (CNH == true)){
        console.log ("Habilitado");
    } else {
        console.log ("Não Habilitado");
    };

switch (idade) {
    case 18:
        console.log (idade)
    break
    case 17:
        console.log (idade)
    break
    default :
        console.log ("Muito novo")
} 

for ( let idade2 = 1; idade2 <=18; idade2++){
    console.log (idade2);
}
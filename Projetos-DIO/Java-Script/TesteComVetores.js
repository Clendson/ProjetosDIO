/*
let totalSalas = 8;
//Aqui temos uma demonstração de array com valores já predefinidos:
let salasComTesouro = [2, 4, 7];
let salasComMonstro = [3, 6, 8];
//Aqui temos uma forma de loop para percorrer cada sala da masmorra:
for (let sala = 1; sala <= totalSalas; sala++) {
//Utilizamos o .includes() para verificar se um número está presente nos arrays:
    let temTesouro = salasComTesouro.includes(sala);
    //console.log ( temTesouro)
    let temMonstro = salasComMonstro.includes(sala);
    //console.log ( temMonstro)

//TODO: Agora implemente uma condição necessária para verificar e exibir se há tesouro na sala e se há montro na sala:
    if (temTesouro === true) {
        console.log ("Tesouro na sala " + sala + "!");
    } else if ( temMonstro === true) {
        console.log ("Monstro na sala " + sala + "!");
    }

let quantidadeGolpes = 4;
// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
let minerais = ["Pedra", "Carvao", "Ferro", "Diamante"];
// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = i % minerais.length;
  
  // TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
  console.log ( i + ": " + minerais[minaIndex]);
}
*/

let nomeEntrada = "Bulba"

function combinandoNomesPokemons (palavra) {
let palavraPokemon = palavra + "saur"
return palavraPokemon
}
// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
let palavraGerada = combinandoNomesPokemons (nomeEntrada);

// Exibindo a palavra gerada:
  console.log(palavraGerada) 

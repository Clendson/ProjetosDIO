function saldoVitorias(Vitorias =0 , Derrotas = 0){
    saldo = Vitorias - Derrotas;
        return saldo
}
function NivelElo (saldoVitorias){
let saldoElo = saldoVitorias

    if (saldoElo <= 10){
        let Elo = "Ferro"
        return Elo
    } else
    if ((saldoElo >= 11) && (saldoElo <= 20)){
        let Elo = "Bronze"
        return Elo
    } else
    if ((saldoElo >= 21) && (saldoElo <= 50)){
        let Elo = "Prata"
        return Elo
    } else
    if ((saldoElo >= 51) && (saldoElo <= 80)){
        let Elo = "Ouro"
        return Elo
    } else
    if ((saldoElo >= 81) && (saldoElo <= 90)){
        let Elo = "Diamante"
        return Elo
    } else
    if ((saldoElo >= 91) && (saldoElo <= 100)){
        let Elo = "Lendário"
        return Elo
    } else
    if (saldoElo >= 101) {
        let Elo = "Imortal"
        return Elo
    }     
return "Sem Elo"
}

let Vitorias = 200
let Derrotas = 22
let SaldoRankeada = saldoVitorias (Vitorias, Derrotas)
let EloJogador = NivelElo (SaldoRankeada)
console.log ("O Herói tem de saldo de "+ SaldoRankeada + " vitórias e está no nível "+ EloJogador)

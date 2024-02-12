class FormaDeBolo {
    constructor (SaborDaMassa,SaborRecheio){
        this.SaborDaMassa = SaborDaMassa
        this.SaborRecheio = SaborRecheio
    }
   escrever (){
    console.log (`Um delicioso bolo de ${this.SaborDaMassa} com recheio de ${this.SaborRecheio}!`)

    }

}

let BoloFesta = new FormaDeBolo("Chocolote", "Recheio de Cenoura")
let BoloCasamento = new FormaDeBolo("Quatro Leite", "Enfeitado com Pingos de Mel")

BoloFesta.escrever();
console.log("-------------------------------------------------------------------------");
BoloCasamento.escrever();

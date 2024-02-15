class Hero {
    constructor (NomeHero, IdadeHero, TipoClasseHero){
    this.NomeHero = NomeHero;
    this.IdadeHero = IdadeHero;
    this.TipoClasseHero = TipoClasseHero;
    }
    
    atacar(){
    TipoAtaque = TipoClasseHero;
        
       if (TipoAtaque === "Mago"){
        TipoAtaque = "magia";
        console.log (`O ${this.TipoClasseHero} atacou usando ${TipoAtaque}!`)
        } 
            else if (TipoAtaque === "Guerreiro"){
            TipoAtaque = "usou espada";
            console.log (`O ${this.TipoClasseHero} atacou usando ${TipoAtaque}!`)
            }
                else if (TipoAtaque === "Monge"){
                TipoAtaque = "usou artes marciais";
                console.log (`O ${this.TipoClasseHero} atacou usando ${TipoAtaque}!`)
                return TipoAtaque
                }
                    else if (TipoAtaque ==="Ninja"){
                    TipoAtaque = "usou shuriken";
                    console.log (`O ${this.TipoClasseHero} atacou usando ${TipoAtaque}!`)
                    }
    }
}

 let NomeHero = "Yasuke"
 let IdadeHero = 30
 let TipoClasseHero = "Monge"
 let aventura = new Hero (NomeHero, IdadeHero, TipoClasseHero)
 let TipoAtaque;

 aventura.atacar ();
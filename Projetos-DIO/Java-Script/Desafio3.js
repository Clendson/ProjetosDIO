/*
além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada */

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
 console.atacar(); 

/*

BoloFesta.escrever();*/
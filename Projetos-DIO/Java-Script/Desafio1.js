let NomePlayer = "Yasuke";
let xpPlayer = 8.248;

if (xpPlayer <= 1.000) {
    console.log ("Ferro")
} else
if ((xpPlayer >= 1.001 ) && (xpPlayer <= 2.000)) {
        console.log ("Bronze")
} else
if ((xpPlayer >= 2.001 ) && (xpPlayer <= 5.000)) {
        console.log ("Prata")
} else
if ((xpPlayer >= 5.001 ) && (xpPlayer <= 7.000)) {
        console.log ("Ouro")
} else
if ((xpPlayer >= 7.001 ) && (xpPlayer <= 8.000)) {
        console.log ("Platina")
} else
if ((xpPlayer >= 8.001 ) && (xpPlayer <= 9.000)) {
        console.log ("Ascendente")
} else
if ((xpPlayer >= 9.001 ) && (xpPlayer <= 10.000)) {
        console.log ("Ascendente")
} else {
    console.log ("Radiante")
}


/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */

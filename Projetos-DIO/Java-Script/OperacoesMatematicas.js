// sinal de + usado para concatenar string
let idade = 30
console.log("valor da minha variável " + idade)

// '+' realizando somas
idade = 30 + 6
console.log("operação de adição " + idade)

// '-' realizando subtrações
let primeiroNumero = 1023
let secundoNumero = 23
console.log(primeiroNumero - secundoNumero)

// '*' realizando multiplicações
let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

multiplicador = 8
produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

// '/' realizando divisões
let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("operação de divisão :" + notaDoMercado / pessoasParaDividir)

// '%' pegando o resto de uma divisão
let calculo = 10 % 3
console.log("operação de módulo " + calculo)

let marca = "Apple"
console.log(marca !== "Samsung")

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// "!== é diferente ?"



//guardar o valor em uma variável de resultado TRUE?FALSE
let marca2 = "Apple"
let resultado = marca2 === "Samsung"

console.log(resultado)



//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O Usuario está barrado ? " + ehCPFBloqueado)


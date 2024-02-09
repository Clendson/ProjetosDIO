function getPrimeiroNome (name, splitChar){
    let firstName = name.split (splitChar)[0]
    return firstName
}

let userName = getPrimeiroNome ("Clendson Gabriel Mendes", " ")
console.log (" Usuário "+ userName + " logado com sucesso");

userName = getPrimeiroNome ("Eduarda-Almeida-Mendes", "-")
console.log (" Usuário "+ userName + " logado com sucesso");
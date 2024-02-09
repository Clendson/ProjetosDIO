function Pedido(){
    console.log ("Pedido Recebido...");
}
 
function torrar(pao, nome = "Não Informado"){
    console.log ("Torrada feita com "+ pao)
    console.log ("Pedido de "+ nome)
}

function ColocarPao(){
    console.log("Preparando para colocar o pão!");
    console.log("Finalizando...")
    console.log("Pronto")

}
Pedido();
ColocarPao();
torrar("pão de forma", "Gabriel");
torrar("pão integral", "Eduarda");



function CreateStringConnection(databaseName, user, pass){
 console.log ( `connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}

CreateStringConnection ("db_Cadastro_Usuarios","Gabriel", "1234")
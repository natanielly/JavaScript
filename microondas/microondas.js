var tempo = [10, 8, 15, 12, 8];
var temp_opcao = menu(tempo);

if (valor > (2*tempo[temp_opcao[1]])){
   prompt(" a comida queimou");
} else if (valor > (3*tempo[temp_opcao[1]])){
    prompt("Kabuuum");
} else if (valor < tempo[temp_opcao[1]]){
    prompt("tempo insuficiente");
}else if (valor < 1 || valor > 5 ){
    prompt("prato inexistente");
}else if (valor == tempo[temp_opcao[1]]){
    prompt("prato inexistente");
};


function menu(tempo){
    console.log(" 1 : pipoca: 10s \n 2 : macarrao: 8s \n 3 : carne: 15s \n 4 : feijao: 12s \n 5 : brigadeiro: 8s \n");
    var opcao = prompt("informe a opcao");
    var soma_temp = prompt("deseja aumentar o tempo?(s/n)");
    var valor = tempo[opcao-1];
    if(soma_temp == "s"){
        temp =prompt("informe o tempo a ser somado:");
        valor = temp + tempo[opcao-1];
    }else{
        soma_temp = prompt("deseja diminuir o tempo?(s/n)");
        if(soma_temp == "s"){
            temp =prompt("informe o tempo a ser subtraido:");
            valor = temp - tempo[opcao-1];
        }
    }
    return [valor, opcao-1];
}
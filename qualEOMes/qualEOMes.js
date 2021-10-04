var numMes = prompt("informe o numero do mes desejado!");
qualEOMes(numMes);


function qualEOMes(mes){
    switch (mes){
        case "1":
            console.log("o mes é janeiro");
            break;
        case "2":
            console.log("o mes é fevereiro");
            break;
        case "3":
                console.log("o mes é março");
                break;
        case "4":
            console.log("o mes é abril");
            break;
        case "5":
            console.log("o mes é maio");
            break;
        case "6":
            console.log("o mes é junho");
            break;
        case "7":
            console.log("o mes é julho");
            break;
        case "8":
            console.log("o mes é agosto");
            break;
        case "9":
            console.log("o mes é setembro");
            break;
        case "10":
            console.log("o mes é outubro");
            break;
        case "11":
            console.log("o mes é novembro");
            break;
        case "12":
            console.log("o mes é dezembro");
            break;
            default:
                console.log("valor invalido!")
                break;
    }
}
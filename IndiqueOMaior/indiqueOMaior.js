var num1 = prompt("informe o numero 1");
var num2 = prompt("informe o numero 2");

indiqueOMaior(num1, num2);

function indiqueOMaior(fisrt, second){
    if(fisrt > second){
        console.log("o numero 2 é o maior");
    }else if(second > fisrt){
        console.log("o numero 1 é o maior");
    }else{
        console.log("os numeros sao iguais");
    }
}
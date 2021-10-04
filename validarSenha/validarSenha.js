var senha = 1234;
validarSenha(senha);

function validarSenha(senha){
var senha_usuario = prompt("informe a senha");
if(senha == senha_usuario){
    console.log("acesso permitido");
}else{
    console.log("acesso negado");
}
}
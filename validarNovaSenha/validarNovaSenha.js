var senha = 1234;
validarSenha(senha);

function validarSenha(senha){
var senha_usuario = prompt("infomre a senha");

senha_usuario == senha ? console.log("acesso permitido") : console.log("acesso negado");

}
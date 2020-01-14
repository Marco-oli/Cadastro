window.onload = function() {
    document.getElementById("nome").focus();
  };

function validar (){
    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var endereço = document.getElementById("endereço");
    var email = document.getElementById("email");
    var radio = document.querySelector("input[name=sexo]:checked");
    var mensagem = document.getElementById("MsgErro");


    if(nome.value == ''){
        mensagem.innerHTML = "Preencha o campo nome";
        mensagem.style.color = "red"
        nome.style.border = "1px solid red"
        return false
    }
    if(telefone.value == ''){
        mensagem.innerHTML = "Preencha o campo telefone";
        mensagem.style.color = "red"
        telefone.style.border = "1px solid red"
        return false
    }
    if(endereço.value == ''){
        mensagem.innerHTML = "Preencha o campo endereço";
        mensagem.style.color = "red"
        endereço.style.border = "1px solid red"
        return false
    }
    if(email.value == ''){
        mensagem.innerHTML = "Preencha o campo email";
        mensagem.style.color = "red"
        email.style.border = "1px solid red"
        return false
    }
    if(radio < 1){
        mensagem.innerHTML = "Selecione o campo sexo";
        mensagem.style.color = "red"
        radio.style.border = "1px solid red"
        return false
    }
    if (nome != "" && telefone != "" && endereço != "" && email != "" && radio != "") {
        mensagem.innerHTML = "Você cadastrou com sucesso";
        mensagem.style.color = "green"
     }   
   
}
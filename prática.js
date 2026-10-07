// Selecionamos o formulário
const formulario = document.getElementById("cadastroForm");

// Selecionamos o local onde os dados serão exibidos
const saida = document.getElementById("saida");

// Selecionamos o local das mensagens de erro
const mensagem = document.getElementById("mensagem");


// Evento de envio do formulário
formulario.addEventListener("submit", function(evento) {

    // Impede o recarregamento da página
    evento.preventDefault();

    // Capturamos os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    const perfil = document.getElementById("perfil").value;
    const termos = document.getElementById("termos").checked;


    // Limpamos mensagem anterior
    mensagem.innerText = "";


    // Validação do nome
    if (nome === "") {
        mensagem.innerText = "Digite seu nome completo.";
        return;
    }


    // Validação do e-mail
    if (email === "") {
        mensagem.innerText = "Digite seu e-mail.";
        return;
    }


    // Validação da senha
    if (senha.length < 6) {
        mensagem.innerText = "A senha deve possuir pelo menos 6 caracteres.";
        return;
    }


    // Confirmação da senha
    if (senha !== confirmaSenha) {
        mensagem.innerText = "As senhas não conferem.";
        return;
    }


    // Validação do perfil
    if (perfil === "") {
        mensagem.innerText = "Selecione um perfil técnico.";
        return;
    }


    // Validação dos termos
    if (!termos) {
        mensagem.innerText = "Você precisa aceitar os termos de uso.";
        return;
    }


    // Se tudo estiver correto, mostramos os dados
    saida.innerHTML = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Perfil:</strong> ${perfil}</p>
        <p>Cadastro realizado com sucesso!</p>
    `;


    // Limpa o formulário
    formulario.reset();

});
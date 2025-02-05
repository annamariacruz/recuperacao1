function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário se houver erros de validação

    let nome = document.getElementById("nome").value;
    let nickname = document.getElementById("nickname").value;
    let birthday = document.getElementById("birthday").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmaSenha = document.getElementById("confirmaSenha").value;
    let robloxAno = document.querySelector('input[name="roblox_ano"]:checked');
    let erros = [];

    // Validação do Nome
    if (!validarNome(nome)) {
        erros.push("O nome deve começar com letra maiúscula e ter pelo menos duas palavras.");
    }

    // Validação do Nickname
    if (!validarNickname(nickname)) {
        erros.push("O nickname não pode ser composto apenas por números.");
    }

    // Validação da Idade (mínimo 13 anos)
    if (!validarIdade(birthday)) {
        erros.push("Você precisa ter pelo menos 13 anos.");
    }

    // Validação da Senha
    if (!validarSenha(senha)) {
        erros.push("A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número.");
    }

    // Validação da Confirmação de Senha
    if (senha !== confirmaSenha) {
        erros.push("As senhas não coincidem.");
    }

    // Validação da Pergunta sobre o Ano do Roblox
    if (!validarAnoRoblox(robloxAno)) {
        erros.push("A resposta para a pergunta 'Em que ano o Roblox foi criado?' está incorreta.");
    }

    // Exibição de erros ou envio do formulário
    if (erros.length > 0) {
        alert("Erros encontrados:\n\n" + erros.join("\n"));
        return false;
    } else {
        alert("Formulário enviado com sucesso!");
        return true; // Aqui você pode enviar o formulário, se necessário
    }
}

// Função de validação do Nome
function validarNome(nome) {
    const nomeParts = nome.trim().split(" ");
    return nomeParts.length >= 2 && /^[A-Z]/.test(nomeParts[0]);
}

// Função de validação do Nickname
function validarNickname(nickname) {
    return !/^\d+$/.test(nickname); // Verifica se o nickname não é composto apenas por números
}

// Função de validação de Idade
function validarIdade(birthday) {
    const dataNascimento = new Date(birthday);
    const idade = new Date().getFullYear() - dataNascimento.getFullYear();
    return idade >= 13; // Verifica se a pessoa tem pelo menos 13 anos
}

// Função de validação de Senha
function validarSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Min 8 caracteres, 1 maiúscula, 1 minúscula, 1 número
    return regex.test(senha);
}

// Função de validação do Ano do Roblox
function validarAnoRoblox(robloxAno) {
    return robloxAno && robloxAno.value === "2006"; // O ano correto é 2006
}

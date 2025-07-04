// array para armazenar os jogadores do time
var time = [];

function main() {
    alert("Bem-vindo ao Sistema de Gerenciamento de Jogadores!");
    
    let opcao;
    
    do {
        // Exibe o menu interativo
        opcao = exibirMenu();
        
        switch(opcao) {
            case "1":
                adicionarJogador();
                break;
            case "2":
                buscarPorPosicao();
                break;
            case "3":
                listarTime();
                break;
            case "4":
                calcularPontuacaoMedia();
                break;
            case "5":
                alert("Obrigado por usar o sistema");
                break;
            default:
                alert("Opção inválida");
                break;
        }
        
    } while(opcao !== "5");
}

function exibirMenu() {
    let menuText = "=== SISTEMA DE GERENCIAMENTO DE JOGADORES ===\n\n";
    menuText += `Total de jogadores cadastrados: ${time.length}\n\n`;
    menuText += "Escolha uma opção:\n";
    menuText += "1 - Adicionar jogador\n";
    menuText += "2 - Buscar por posição\n";
    menuText += "3 - Listar time\n";
    menuText += "4 - Calcular pontuação média\n";
    menuText += "5 - Sair\n\n";
    menuText += "Digite sua opção:";
    
    return prompt(menuText);
}

function adicionarJogador() {
    // solicita os dados do jogador
    let nome = prompt("Digite o nome do jogador:");
    // ve se o nome é valido
    if (!nome || nome.trim() === "") {
        alert("Nome inválido! Jogador não foi adicionado.");
        return;
    }
    
    let idade;
    while (true) {
        idade = Number(prompt("Digite a idade do jogador:"));
        // ve se a idade é válida
        if (Number.isInteger(idade) && idade > 0) {
            break;
        }
        alert("Por favor, digite uma idade válida.");
    }
    
    let posicao = prompt("Digite a posição do jogador:");
    if (!posicao || posicao.trim() === "") {
        alert("Posição inválida! Jogador não foi adicionado.");
        return;
    }
    
    let pontuacao;
    while (true) {
        pontuacao = Number(prompt("Digite a pontuação do jogador(0 a 100):"));
        if (!isNaN(pontuacao) && pontuacao >= 0 && pontuacao <= 100) {
            break;
        }
        alert("Por favor, digite uma pontuação válida");
    }
    
    // cria o objeto jogador
    let jogador = {
        nome: nome.trim(),
        idade: idade,
        posicao: posicao.trim(),
        pontuacao: pontuacao
    };
    
    // Add ao array time
    time.push(jogador);
    alert(`Jogador "${jogador.nome}" adicionado!`);
}

function buscarPorPosicao() {
    // ve se tem jogador no time
    if (time.length === 0) {
        alert("Nenhum jogador cadastrado no time!");
        return;
    }
    
    let posicaoBusca = prompt("Digite a posição que deseja buscar:");
    if (!posicaoBusca || posicaoBusca.trim() === "") {
        alert("Posição inválida!");
        return;
    }
    
    // busca jogadores da posição (case insensitive)
    let jogadoresEncontrados = time.filter(jogador => 
        jogador.posicao.toLowerCase() === posicaoBusca.trim().toLowerCase()
    );
    
    if (jogadoresEncontrados.length === 0) {
        alert(`Nenhum jogador encontrado na posição "${posicaoBusca}".`);
        return;
    }
    
    // Exibe os jogadores encontrados
    alert(`=== JOGADORES NA POSIÇÃO: ${posicaoBusca.toUpperCase()} ===`);
    jogadoresEncontrados.forEach((jogador, index) => {
        alert(`${index + 1}. Nome: ${jogador.nome} | Idade: ${jogador.idade} | Pontuação: ${jogador.pontuacao}`);
    });
}

function listarTime() {
    if (time.length === 0) {
        alert("Nenhum jogador cadastrado no time!");
        return;
    }
    
    let lista = "=== LISTA COMPLETA DO TIME ===\n";
    time.forEach((jogador, index) => {
        lista += `${index + 1}. Nome: ${jogador.nome} | Idade: ${jogador.idade} | Posição: ${jogador.posicao} | Pontuação: ${jogador.pontuacao}\n`;
    });
    alert(lista);
    
}

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        alert("Nenhum jogador cadastrado! Não é possível calcular a média.");
        return;
    }
    
    // Calcula a soma das pontuações
    let somaPontuacoes = time.reduce((soma, jogador) => soma + jogador.pontuacao, 0);
    
    // Calcula a média
    let media = somaPontuacoes / time.length;
    
    alert(
        "=== PONTUAÇÃO MÉDIA DO TIME ===\n" +
        `Total de jogadores: ${time.length}\n` +
        `Soma das pontuações: ${somaPontuacoes}\n` +
        `Pontuação média: ${media.toFixed(2)}`
    );
}

main();
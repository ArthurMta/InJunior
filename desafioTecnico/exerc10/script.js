function main() {
    alert("Bem-vindo à Central de Atendimento ao Cliente!");

    // cria a lista da fila de atendimento
    var fila = [];

    var opcao;

    do {
        // exibe o menu com a fila atual
        opcao = exibirMenu(fila);

        switch (opcao) {
            case "1":
                adicionarCliente(fila);
                break;
            case "2":
                atenderCliente(fila);
                break;
            case "3":
                alert("Obrigado por usar nosso sistema de atendimento!");
                break;
            default:
                alert("Opção inválida! escolha uma opção válida (1, 2 ou 3).");
                break;
        }

    } while (opcao != "3");
}

function exibirMenu(filaAtendimento) {
    let menuText = "=== CENTRAL DE ATENDIMENTO ===\n\n";

    // mostra a fila atual
    if (filaAtendimento.length == 0) {
        menuText += "Fila de espera: Nenhum cliente na fila\n\n";
    } else {
        menuText += "Fila de espera:\n";

        // mostra is clientes na fila
        filaAtendimento.forEach((cliente, index) => {
            menuText += `${index + 1}º ${cliente}\n`;
        });
        menuText += "\n";
    }

    // mostra as opções
    menuText += "Escolha uma opção:\n";
    menuText += "1 - Novo Cliente\n";
    menuText += "2 - Atender Cliente\n";
    menuText += "3 - Sair\n\n";
    menuText += "Digite sua opção:";

    return prompt(`${menuText}`);
}

function adicionarCliente(filaAtendimento) {
    let nomeCliente = prompt("Digite o nome do novo cliente:");

    // ve se o nome é válido e remove os espacinhos entre ele
    if (nomeCliente && nomeCliente.trim() != "") {
        filaAtendimento.push(nomeCliente.trim());
    } else {
        alert("Nome inválido");
    }
}

function atenderCliente(filaAtendimento) {
    if (filaAtendimento.length == 0) {
        alert("Não há clientes na fila!");
        return;
    }

    // Remove o primeiro cliente da fila e retorna ele mesmo para cliente atendido
    let clienteAtendido = filaAtendimento.shift();
    alert(`Atendendo cliente: ${clienteAtendido}`);

    // Mostra quantos clientes restam na fila
    if (filaAtendimento.length > 0) {
        alert(`Restam ${filaAtendimento.length} clientes`);
    } else {
        alert("Fila vazia");
    }
}

main();
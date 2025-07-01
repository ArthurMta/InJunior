function main() {

    let input;
    
    while (true) {
        input = prompt("Digite vários números separados por espaço:");

        if (!input) {
            alert(`Entrada inválida. Por favor, digite números separados por espaço.`);
            continue;
        }

        break; // Se a entrada for válida, sai do loop

    }

    // separa os números e converte para um array de inteiros
    let idades = input.split(' ').map(Number);

    printIdades(idades, verificadorIdade(idades));

}

function verificadorIdade (arrayIdades) {

    let arrayVerificadorIdade = [];

    arrayIdades.forEach(idade => {

        if (idade >= 18) {
            arrayVerificadorIdade.push(`maior`);
        } else {
            arrayVerificadorIdade.push(`menor`);
        }

    });

    return arrayVerificadorIdade;

}

function printIdades(arrayIdades, arrayMaiorMenor) {

    alert(`Resposta no console da página`);
    
    arrayMaiorMenor.forEach((verificador, index) => {
        console.log(`Pessoa ${index + 1}: ${verificador} de idade (${arrayIdades[index]} anos)`);
    });

}

main();
function main() {
    
    let input;
    
    while (true) {
        input = prompt("Digite um número");

        if (!input || isNaN(input)) {
            alert(`Entrada inválida.`);
            continue;
        }

        break; // se a entrada for válida, sai do loop

    }

    fizzbuzz(input);

}

function fizzbuzz(valorReal) {

    if (valorReal % 3 === 0 && valorReal % 5 === 0) {
        alert("fizzbuzz");
    } else if (valorReal % 3 === 0) {
        alert("fizz");
    } else if (valorReal % 5 === 0) {
        alert("buzz");
    }
}

main();
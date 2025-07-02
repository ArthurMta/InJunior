function main() {
    // input da palavra
    let palavra = prompt("Digite uma palavra:");

    let palavraForm = palavra.toLowerCase();

    // inverte a palavra
    let palavraInv = palavraForm.split('').reverse().join('');

    if (palavraForm === palavraInv) {
        alert("É um palíndromo");
    } else {
        alert("Não é um palíndromo");
    }
}

main();

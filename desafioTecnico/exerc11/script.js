// Solicita ao usuário a quantidade de números
const quantidade = parseInt(prompt("Quantos números deseja inserir?"));

const numeros = [];

// Solicita ao usuário que insira cada número
for (let i = 0; i < quantidade; i++) {
    const num = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(num);
}

// Conta quantos números estão em ordem crescente em relação ao anterior
let crescente = 0;
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
        crescente++;
    }
}

console.log(`Quantidade de números em ordem crescente em relação ao anterior: ${crescente}`);
alert(`Quantidade de números em ordem crescente em relação ao anterior: ${crescente}`);
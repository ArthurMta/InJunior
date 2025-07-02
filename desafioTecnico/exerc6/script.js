function main() {
    let input;

    while (true) {
        input = prompt("Digite um número:");

        // Verifica se o input é válido
        if (!input || isNaN(input)) {
            alert(`Entrada inválida. Digite um número inteiro positivo.`);
            continue;
        }

        break;
    }

    const n = Number(input);
    alert(`Resposta no console da página`);

    console.log(`Os termos até o ${n}º número de Fibonacci são:\n`)
    for (let index = 0; index < n; index++) {
        console.log(fibo(index))
    }
}

// funcao recursiva que retorna um array com os n primeiros termos da seq
function fibo(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1){
        return 1;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

main();

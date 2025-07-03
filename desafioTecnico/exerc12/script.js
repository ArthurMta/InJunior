function main() {
    const numeros = [2, 3, 5, 4, 5, 3 , 4]; // array que usarei de teste
    const resultado = encontrarElementoUnico(numeros);
    alert(resultado);
}


function encontrarElementoUnico(arr) {
    let unico = 0;
    for (let num of arr) {
        unico ^= num;
    }
    return unico;
}

main();
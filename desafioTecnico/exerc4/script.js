function main() {
    
    while (true) {
        var dinheiro = Number(prompt("Digite o valor (em Real) que deseja converter:"));

        if (isNaN(dinheiro) || dinheiro <= 0 || !dinheiro) {
            alert("Por favor, digite um valor numérico válido e maior que zero");
            continue;
        }
        break;
    }
        
    // faz o cambio
    var resultado = cambioReal(dinheiro);

    // Retorna como Alert os valores
    alert(`Valor em Real: R$ ${dinheiro}
    Valor em Dólar: US$ ${resultado.dolar}
    Valor em Euro: € ${resultado.euro}`);

}

function cambioReal(valorReal) {
    // cotaçoes do exerc
    const cotacaoDolar = 5.7; 
    const cotacaoEuro = 6.1;  


    // retorna dolar ou euro de acordo com o pedido
    return {
        dolar: (valorReal / cotacaoDolar),
        euro: (valorReal / cotacaoEuro)
    };
}

main();
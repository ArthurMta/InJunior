function main() {

    alert("Insira os coeficientes da equação do segundo grau: ax² + bx + c = 0");

    // Chama a funcao para pegar os coeficientes
    const { a, b, c } = getCoeficientes();

    // Calcula o delta
    var delta = b * b - 4 * a * c;

    // Avalia se possui 1 raíz (delta == 0), duas raizes (delta > 0), ou nenhuma raíz (delta < 0)
    switch (true) {
        case delta > 0:
            alert(`A equação possui 2 raízes reais distintas`);
            
            // Calcula as raízes e mostra
            let {x1, x2} = setRaizes(a, b, c);
            alert(`As raízes da equação são ${x1} e ${x2}`)
            break;

        case delta === 0:
            alert(`A equação possui 1 raíz real`);

            // Calcula a raíz e mostra
            let x = setRaiz(a, b);
            alert(`A raíz da equação é ${x}`);
            break;

        default:

            alert(`A equação não possui raízes reais`);
            // Retorna a main
            return;
    }
}

// Funcao para pegar os coeficientes
function getCoeficientes() {
    let a =  Number(prompt("Digite o valor de a:"));
    let b =  Number(prompt("Digite o valor de b:"));
    let c =  Number(prompt("Digite o valor de c:"));
    return { a, b, c };
}

//Funcao para calcular Bhaskara
function setRaizes( a, b, c) {
    let delta = b * b - 4 * a * c;

    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return { x1, x2 };
}

function setRaiz( a, b ) {

    let x = (-b) / (2 * a);

    return x;
}

main();
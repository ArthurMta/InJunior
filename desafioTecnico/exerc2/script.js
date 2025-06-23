function main() {

    var resp = "S";

    do {
        alert(`Digite um número inteiro para calcular seu fatorial`);

        // pega o numero do usuario
        let num;
        while(true){
            num = Number(prompt(`Digite um número:`));

            // Ve se num é um numero e quebra o looping caso seja
            if (Number.isInteger(num)) {
            break;
            }

            // Se chegou aqui, alerta que não era um numero e volta o looping
            alert("Por favor, digite um número inteiro.");
        }

        // calcula o fatorial
        let numfatorial = setFatorial(num);        
        alert(`${num} fatorial é ${numfatorial}`)

        //pergunta se quer repetir o processo
        resp = prompt(`Deseja calcular o fatorial de outro número? (S/N)`).toUpperCase();

        // se a resp for "S", continua no looping
        // se a resp for "N", breaka o looping
    } while (resp == "S");
    
    return;
}

function setFatorial( num ) {

    let contador = num;
    let fatorial = 1;

    // Enquanto o contador n for 0, multiplica o fatorial entre contador, decrescnedo o mesmo
    while (contador > 0) {

        fatorial *= contador;

        contador--;
    }

    return fatorial;
}

main();
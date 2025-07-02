import { booksByCategory } from './data.js';
//pegar o dic booksByCategory do arquivo data.js importado e chamar de livros

function main() {
    
    alert(`Resposta no console da página`);

    console.log(countBooksInCategory(booksByCategory));
    console.log(authors(booksByCategory));
}

// exerc 8
function countBooksInCategory(categorias) {
    const result = {};

    categorias.forEach(cat => {
        // ver quantos livros tem em cada categoria
        result[cat.category] = cat.books.length;
    });

    // retorna tuplas com 
    return result;
}

// exerc 9
function authors(categorias) {

    // cria um set, pra n salvar duplicatas
    const authorsSet = new Set();
    
    categorias.forEach(cat => {
        cat.books.forEach(book => {
            authorsSet.add(book.author);
        });
    });
    

    return authorsSet;
}

main();
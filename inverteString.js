function reverterPalavra(palavra) {
    let palavraRevertida = '';
    
   
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraRevertida += palavra[i];
    }
    
    return palavraRevertida;
}

let palavraOriginal = "teste estágio";
let palavraRevertida = reverterPalavra(palavraOriginal);
console.log("Palavra original:", palavraOriginal);
console.log("Palavra revertida:", palavraRevertida);

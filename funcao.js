// funcao sem rtorno

function imprimirSoma(a, b){

    console.log(a + b)

}

imprimirSoma(2, 4)

imprimirSoma(4, 1, 4, 5)


// funcao com retorno

function soma(a, b=1){

    return a + b
}

console.log(soma(2))

// armazenar funcao em uma variavel

const impSoma = function (a, e) {
    console.log(a + e)
}
impSoma(3, 5)

// armazenando funcao arrow em uma variavel

const sub = (a , b) => {
    return a - b
}

console.log(sub(2, 5))

// retorno implicito

const subtracao = (a, v) => a - b

console.log(subtracao(5, 7))
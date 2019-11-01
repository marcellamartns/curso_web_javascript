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
    // console.log(a + e)
}
impSoma(3, 5)



// retorno implicito

const subtracao = (a, v) => a - v

console.log(subtracao(5, 7))


const imprimir = a => console.log(a)
imprimir("ola teste")


const funcs = []

for (let i = 0; i < 10; i++){

    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()

console.log("oi")
console.log("ok")

function nomeImp(nome, ano){
    this.nome = nome;
    ano = ano;
}
nome1 = new nomeImp("ju", );
console.log(nome1.ano);


const pessoas = { nome: "marcell",
                  idade: 12,
                  cor: "preto",
                  comida: "aeeoza"}
console.log(pessoas)

const {cor, nome} = pessoas

console.log(nome)

const [a, b, c] = [1, 2, 3]

console.log(a % b)


for (let atributo in pessoas){

    console.log( `${atributo} = ${pessoas[atributo]}`)
}


// ARMAZENAR FUNÇÃO EM ARRAY
let array = [function (a, b) {return a + b}]
console.log(array[0](1,4))

// ARMAZENAR FUNÇÃO EM UM ATRIBUTO DE OBJETO
let obj = {}
obj.falar = function() {return "ola"}
console.log(obj.falar())

//PASSAR FUNÇÃO COMO PARAMETRO DE OUTRA
function run(fun){
    fun()
}

run(function () {console.log("testando")})


function nota(n1, n2){

    if (n1 > 5)
        console.log("na media")
    else if (n1 < 5)
        console.log("recuperação")
    else if (n1 > 9)
        console.log("aprovado")
    else 
        console.log("nota invalida")

    let media = n1 + n2 / 2
}
nota(10, 6)

// valor padrao
function valpadrao(a, b, v){
    a = a !== undefined ? a: 1
}



// FUNÇÃO BIND
function Pessoa() {

    this.idade = 0
    const self = this
    setInterval(function() {
        this.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
// new Pessoa


// ARROW
let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

dobro = a => 2*a

console.log(dobro(Math.PI))

oi = () => console.log("eae")

oi()

// armazenando funcao arrow em uma variavel

const sub = (a , b) => {
    return a - b
}

console.log(sub(2, 5))


// FUNÇÕES CALLBACK

const fabricantes = ["carro", "moto", "bike"]

function imprime(nome, ind){
    console.log(`${ind+1}. ${nome}`)
}
fabricantes.forEach(imprime)
fabricantes.forEach(fabricante => console.log(fabricante))


function mensagem (msg){

    console.log(msg)
}

function monteNome(n1, n2, parametroFuncCallback) {

    // alguma rotina
    console.log("rodou sistema");

    const nome = `nome: ${n1} ${n2}`

    parametroFuncCallback(nome);
    
}
monteNome("marcelo", "moreira", mensagem)

function name (nome, sobrenome, calb){

    let nomeCompl = `${nome} e ${sobrenome}`
    calb(nomeCompl)
}

function imp (juns){

    console.log(juns)

}

name("ana", "ju", imp)


// FUNCTION DECLARATION
function somar(a, b){
    return a+b
}

//FUNCTION EXPRESSION
const subtr = function(a,b){
    return a-b
}

//NAMED FUNCTION EXPRESSION
const subbt = function subbt(a,b){
    return a - b
}

// FUNÇÃO FACTORY SIMPLES
//Tem a função de retornar um objeto

function novaPessoa(){
    return {
        nome:"ana",
        idade: 12,
        cor:"azul"
    }
}

function pessoaParam(nome, idade, cor){

    return {
        nome,
        idade,
        cor: "blue"
    }
}

console.log(pessoaParam("jiiu", 123))


//FUNÇÃO CONSTRUTORA

function Pessoa(nome, cpf){

   

    
}

console.log(Pessoa("ma", 21313))






pessoa = {};
pessoa.nome = "ana";
console.log(pessoa);


pessoa.nome = "ju";
pessoa.idade = 3;
pessoa.cor = "rosa";
pessoa.animal = "cat";
console.log(pessoa);

//congela o objeto
Object.freeze(pessoa)
pessoa.sair = "verdade";


let aluno = Object.freeze({nome:"mariela"});

console.log(aluno);

aluno.nome = "haha";
console.log(aluno)

// literal

const rosa="rosa";
const preto="preto";
const verde="verde";
const a=1;
const b=2;
const c=3;

const obj1 = {rosa, preto, verde, a, b, c};

console.log(obj1);


const obj2 = {};
const nomeAtbt = "ano";
const valAtbt = 1999;
obj2[nomeAtbt] = valAtbt;
console.log(obj2);

const obj3 = {[nomeAtbt]: valAtbt};
console.log(obj3);



const obj4 = {val1: 3,
              val2: 5,
              soma(n1, n2){
                  return n1 + n2 
              },
            nome: "ana"};

console.log(obj4.soma(4, 6));


const sequencia = {
    _valor: 1, //convenção
    
    get valor() { return this._valor++},

    set valor(valor) {this._valor = valor}
};

sequencia.valor = 1;
console.log(sequencia.valor);




// funções importantes

const pessoa1 = {
    nome: "joana",
    idade: 16,
    tel: 232434,
    cor: "azul"
}

console.log(Object.keys(pessoa1))
console.log(Object.values(pessoa1))
console.log(Object.entries(pessoa1))
Object.entries(pessoa1).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa1).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa1, "dataNasc",{
    enumerable : true,
    writable: true,
    value: "1/2/345"
})

pessoa.dataNasc = "12/12/1999"
console.log(pessoa1.dataNasc)



// concartenar obj

const dest = {a:6}
const aa = {b: 6767}
const bb = {a: 467, jk:6765675}
const cc = {uy:7878}


const objtot = Object.assign(dest, aa, bb, cc)
console.log(objtot)


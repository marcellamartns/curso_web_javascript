
class Aluno{

    constructor(nome){
        this.nome = nome
    }
    
}

class Sobrenome extends Aluno{

    constructor(nome, sobrenome){
        
        super(nome)
        this.sobrenome = sobrenome
    }
}

class Junta extends Sobrenome{

    constructor(nome, sobrenome){
        super("ana", "lala")
    }
    print(nome){
        return console.log(`O nome é ${nome} e o sobrenome ${this.sobrenome}`)
    }

}

const ok = new Junta

console.log(ok.nome)
ok.print(ok.nome, ok.sobrenome)
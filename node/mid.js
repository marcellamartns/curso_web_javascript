

const passo1 = (contexto, next) => {
    contexto.valor1 = 'midi'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'midi2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'midi3'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](contexto, () => execPasso(indice+1))
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)
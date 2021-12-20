let equacao = equação()
let titulo = criaElemento('h1', `Quanto é ${equacao.equacao}? ${equacao.resultado}`)

document.body.appendChild(titulo)

let numero = randInt(0, 2)
let numeroerrado = randInt(0, 21)

for (let i = 0; i < 3; i++) {
    if (numero == i) {
        let btnCerto = criaElemento('button', equacao.resultado)
        btnCerto.onclick = () => {
            acerto()
        }
        document.body.appendChild(btnCerto)

    } else {
        while (numeroerrado == equacao.resultado) {
            numeroerrado = randInt(0, 21)
        }

        if (document.getElementsByTagName('button').length == 2) {
            for (let b = 0; document.getElementsByTagName('button').length < 3; b++) {
                if (numeroerrado == document.getElementsByTagName('button')[b]) {
                    numeroerrado = randInt(0, 21)
                }
            }
        }
        document.body.appendChild(criaElemento('button', numeroerrado))
    }

}


let tempo = 5

document.body.appendChild(criaElemento('p', tempo, 'cronometro'))


let cronometro = setInterval(() => {
    tempo--
    document.getElementById('cronometro').innerHTML = tempo
    if (tempo == 0) {

        // alert('Perdeu!!!')
        clearInterval(cronometro)
    }
}, 1000)

function acerto() {

    equacao = equação()

    titulo.innerText = `Quanto é ${equacao.equacao}? ${equacao.resultado}`

    for (let i = 0; i < 3; i++) {
        document.getElementsByTagName('button')[0].remove()
    }

    document.getElementById('cronometro').remove()

    numero = randInt(0, 2)

    for (let i = 0; i < 3; i++) {
        if (numero == i) {
            let btnCerto = criaElemento('button', equacao.resultado)
            btnCerto.onclick = () => {
                acerto()
            }
            document.body.appendChild(btnCerto)

        } else {
            while (numeroerrado == equacao.resultado) {
                numeroerrado = randInt(0, 21)
            }

            if (document.getElementsByTagName('button').length == 2) {
                for (let b = 0; document.getElementsByTagName('button').length < 3; b++) {
                    if (numeroerrado == document.getElementsByTagName('button')[b]) {
                        numeroerrado = randInt(0, 21)
                    }
                }
                document.body.appendChild(criaElemento('button', numeroerrado))
            }
        }

    }

    tempo = 5

    document.body.appendChild(criaElemento('p', tempo, 'cronometro'))

    // cronometro()

    return

}


function randInt(minimo = 0, maximo = 5) {
    let i = 1
    while (i == 1) {
        let numero = parseInt(Math.random() * maximo)
        if (numero >= minimo && numero <= maximo) {
            i = 0
            return numero
        }
    }
}


function equação() {
    let operador = ['+', '-'][parseInt(Math.random() * 2)]
    let equacao = randInt(0, 11) + operador + randInt(0, 11)
    let resultado = eval(equacao)
    return {
        equacao,
        resultado
    }
}


function criaElemento(Elemento, innerHTML, id) {
    let elemento = document.createElement(Elemento)
    elemento.innerHTML = innerHTML
    if (id) {
        elemento.id = id
    }
    if (classe) {
        elemento.class = classe
    }
    return elemento
}
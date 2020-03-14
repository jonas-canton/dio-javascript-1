function funcaoChange(elemento) {
    console.log(elemento.value)
}

function load() {
    alert("Página carregada!")
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
}

function trocar(elemento) {
    // alert("Trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function redirecionar() {
    window.open("https://www.google.com")
    // window.location.href = "https://www.google.com" // Abrir na mesma janela
}

function clicou() {
    document.getElementById('agradecimento').innerHTML = "<b>Obrigado por clicar</b>"
}

// function soma(n1, n2) {
//     return n1 + n2
// }

// function validaIdade(idade) {
//     var validar;
//     if (idade >= 18) {
//         validar = true
//     } else {
//         validar = false
//     }
//     return validar
// }

// var idade = prompt("Qual a sua idade?")
// console.log(validaIdade(idade))

// alert(soma(5, 10))


// var lista = ["Alemanha", "Inglaterra", "Escócia"]
// lista.push("Polônia");
// lista.pop("Inglaterra");

// alert(lista)

// var d = new Date()
// alert(d.getDay())
// alert(d.getHours())
// alert(d.getMinutes())

// var count
// for (count = 0; count <= 5; count++) {
//     alert(count)
// }

// var count = 0
// while (count < 5) {
//     console.log(count);
//     count++
// }

// var idade = prompt('Qual a sua idade?')
// if (idade >= 18) {
//     alert('maior de idade')
// } else {
//     alert('menor de idade')
// }

// var frutas = [{ nome: 'maçã', cor: 'vermelha' }, { nome: 'fruta', cor: 'roxa' }]
// console.log(frutas)
// console.log(frutas[1].nome)

// var fruta = { nome: 'maçã', cor: 'vermelha' }
// console.log(fruta.nome)
// console.log(fruta.cor)

// var lista = ['maçã', 'pêra', 'laranja']
// lista.push('uva') // adiciona
// lista.pop() //remove o último elemento
// console.log(lista, lista.length)
// console.log(lista.reverse())
// console.log(lista.toString())
// console.log(lista.join(' - ')) // junta cada elemento do array numa string com o separador passado por parâmetro


// var nome = 'Jonas Canton'
// var idade = 29
// var idade2 = 10
// var n1 = 5
// var n2 = 3
// var frase = 'Japão é o melhor time do mundo'
// // alert(nome + ' tem ' + idade + ' anos ')
// // alert(idade + idade2)
// console.log(nome)
// console.log(idade + idade2)
// console.log(n1 * n2)
// console.log(frase.replace('Japão', 'Brasil'))
// console.log(frase.toUpperCase())
// console.log(frase.toLowerCase())
// // alert(frase.replace('Japão', 'Brasil'))

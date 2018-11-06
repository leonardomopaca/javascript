console.log('arquivo carregado')

var nome = 'Leonardo'
var idade = 34
var peso = 82.5
var maior = true

console.log(nome, typeof nome)
console.log(idade, typeof idade)
console.log(peso, typeof peso)
console.log(maior, typeof maior)

var convidados = [
    {nome: 'Leonardo',
    idade: 34,
    sexo: 'm'
    },
    {nome: 'Joao',
    idade: 32, 
    sexo: 'm'
    },
    {nome: 'Maria',
    idade: 31,
    sexo: 'f'
    }
]

for (var i = 0; i < convidados.length; i++ ){
    console.log(convidados[i].nome)
}

function imc(altura, peso){
    return peso / (altura * altura)
}

var pessoas = [
    {nome: 'Leandro', altura: 1.75, peso:82},
    {nome: 'Luis', altura: 1.79, peso:75},
    {nome: 'Jose', altura: 1.82, peso:89}
]

for (var pessoa of pessoas){
    var resultado = imc(pessoa.altura, pessoa.peso)
    console.log(pessoa.nome, resultado)
}
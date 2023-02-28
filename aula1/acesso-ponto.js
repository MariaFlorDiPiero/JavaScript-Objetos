const cliente = {
    nome: "André",
    idade: 32,
    cpf: "11122233344",
    email: "andre@dominio.com.br",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`)

console.log(`Os três primeiros dígitos do CPF são ${cliente.cpf.substring(0,3)}`)
const cliente = {
    nome: "André",
    idade: 32,
    cpf: "11122233344",
    email: "andre@dominio.com.br",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`)

const chaves = ["nome", "cpf", "idade", "email", "altura"];

chaves.forEach ( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})
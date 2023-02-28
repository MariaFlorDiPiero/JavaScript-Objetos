const pessoa = {
    nome: "Luma",
    profisão: "engenheira",
}

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223334444"

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
}

//pessoa = novaPessoa 
// dá erro de atribuição a variável const, só é possível alterar e manipular as propriedades de um o objeto e não a variável const
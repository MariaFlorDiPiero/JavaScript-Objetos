const cliente = {
    nome: "João",
    idade: 24,
    email: "joaofirma@firma.com",
    telefone: "1155555555",
    telefone2: ["11444444440", "11444444440"]
};

cliente.enderecos = [{
    rua: "Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}
]

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}
}
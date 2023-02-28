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
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado.")
}
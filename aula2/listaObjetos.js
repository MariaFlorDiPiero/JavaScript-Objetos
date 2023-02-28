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

cliente.enderecos.push({
    rua: "R.Joseph Ladder",
    numero: 404,
    apartamento: false, 
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

//console.log(cliente)

//console.log(cliente.enderecos)

console.log(listaApenasApartamentos)
const cliente = {
    nome: "João",
    idade: 24,
    email: "joaofirma@firma.com",
    telefone: ["1155555555", "11444444440"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo) {
                console.log("Saldo insuficiente");
            } else {
                this.saldo -= valor;;
                console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
            }
        }
    };

    cliente.efetuaPagamento(250);
    cliente.efetuaPagamento(25);
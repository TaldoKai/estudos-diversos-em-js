const cliente = {
    nome:"André",
    idade:36,
    cpf:"12345678911",
    email:"andre@email.com",
    fones:["55912345498", "55988743124"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNascimento:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Fermina"

console.log(cliente)
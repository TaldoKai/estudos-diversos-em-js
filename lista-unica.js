const clientes = [
    {
    nome:"André",
    idade: 36,
    cpf:"12345678911",
    email:"andre@email.com",
    fones:["55912345498", "55988743124"],
    dependentes: [{
        nome:"Sara",
        parentesco:"filha",
        dataNascimento:"20/03/2011" },
        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNascimento:"04/01/2014",
        }]
    },
    {
        nome: "Juliana",
        cpf:"12338458911",
        dependentes: [
            {
            nome:"Sophia",
            parentesco:"filha",
            dataNascimento:"20/08/2020" 
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)
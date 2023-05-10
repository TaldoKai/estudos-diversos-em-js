const cliente = {
    nome:"André",
    idade:36,
    cpf:"12345678911",
    email:"andre@email.com",
    fones:["55912345498", "55988743124"],
    dependentes: [
        {
        nome:"Sara",
        parentesco:"filha",
        dataNascimento:"20/03/2011" },
        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNascimento:"04/01/2014"
        }
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo+= valor;
    }
}

let relatorio = "";

for (let info in cliente)
{
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    } else {
        relatorio += `${info} : ${cliente[info]}\n`;
    }
}

console.log(relatorio)
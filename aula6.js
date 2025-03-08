/*const users = ['Maria', 'Aline', 'João']


for(let a = 0; a < users.length; a++){
    console.log(users[a])
}*/

/*const pessoas = ['Sousa, Arthur, Victor']

for (const nome of pessoas) {
    console.log(nome)
}*/

/*const Perfil = {nome: 'Arthur',  idade: 40, rua:'SCS'}



for(let key in Perfil) {
console.log(`${key} : ${Perfil[key]}`)
}*/


/*const usuarios = [
   {nome: 'Arthur', idade: 12, Bairro: 'Bonfim'},
   {nome: 'Fabio', idade: 11, Bairro: 'Bonfim'},
   {nome: 'Bruno', idade: 19, Bairro: 'Bonfim'},
   {nome: 'Victor', idade: 18, Bairro: 'Bonfim'},

]

usuarios.forEach(function(item, index, array) {
  if (item.idade < 18){
    console.log(`O cliente ${item.nome}, posição ${index}, é menor de idade.`)
  } else {
    console.log(`O cliente ${item.nome}, posição ${index}, é maior de idade.`)
  }
});*/

const jogadores = [
    { nome: 'Luis', idade: 20, estadoAtual: 'Profissional', clube: 'internacional' },
    { nome: 'Luis', idade: 16, estadoAtual: 'SemiProfissional', clube: 'Flamengo'},
    { nome: 'Luis', idade: 19, estadoAtual: 'Profissional', clube: 'Santos'},
    { nome: 'Luis', idade: 16, estadoAtual: 'SemiProfissional', clube: 'Santos' },
    { nome: 'Luis', idade: 19, estadoAtual: 'Profissional', clube: 'Santos' },
    { nome: 'Luis', idade: 20, estadoAtual: 'Profissional' , clube: 'Santos'},
    { nome: 'Luis', idade: 19, estadoAtual: 'Profissional' , clube: 'Santos'},
    { nome: 'Luis', idade: 19, estadoAtual: 'Profissional' , clube: 'Santos'},
    { nome: 'Luis', idade: 20, estadoAtual: 'Profissional' , clube: 'Santos'},
    { nome: 'Paulo', idade: 19, estadoAtual: 'Profissional' , clube: 'Santos'},
    { nome: 'Fabio', idade: 19, estadoAtual: 'Profissional' , clube: 'Santos'},
    { nome: 'Lucas', idade: 16, estadoAtual: 'SemiProfissional', clube: 'Santos' },
    { nome: 'Kevin', idade: 16, estadoAtual: 'SemiProfissional' , clube: 'Santos'},
    { nome: 'Neymar', idade: 16, estadoAtual: 'SemiProfissional' , clube: 'Santos'},
    { nome: 'Arthur', idade: 16, estadoAtual: 'SemiProfissional' , clube: 'Santos'},
]   

jogadores.forEach(function (item, index, array) {
    if (jogadores > 17) {
        console.log(`O nome do jogador é: ${item.nome}, sua idade é: ${item.idade}, e seu estado atual é: ${estadoAtual}, no time ${item.clube}`)

    } else {
        console.log(`Nome do jogador é: ${item.nome}, sua idade é: ${item.idade}, e seu estado atual é: ${item.estadoAtual}, no time ${item.clube}`)
    }

});
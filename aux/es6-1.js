
// Exercicio 1 
// class User {
// 	constructor(props){
//     this.nome = props.nome;
// 		this.email = props.mail;
// 		this.senha = props.senha;
//   }

//   isAdmin(){
// 		return this.admin ? true : false;
//   }
// }

// class Admin extends User{
// 	constructor(props){
// 		super(props);
// 		this.admin = true;
// 	}
// }


// const user1  = new User ({nome: "kinder", mail: "aaa", senha: 'kaka'});
// const admin1 = new Admin({nome: "kinder", mail: "aaa", senha: 'kaka'});

// console.log(user1.isAdmin());
// console.log(admin1.isAdmin());

////////////////////////////////////////////////////////////////////////////////////
// Exercicio 2
// const usuarios = [
//  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];

// const idades = usuarios.map(user => user.idade);
// console.log(idades);

// const rsIdade = usuarios.filter(user =>{
// 	return user.empresa === "Rocketseat" && user.idade > 18;
// });
// console.log(rsIdade);

// const google = usuarios.find(user => user.empresa == "google");
// console.log(google);

// const idade2 = usuarios
//       .map(user => {
//         return {...user, idade: user.idade * 2};
//       }).filter(user =>{
//         return user.idade < 40 ? user : null ;
//       });
      
// console.log(idade2);

//////////////////////////////////////////
// Exercicio 3

// 3.1

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.map(n => n+10));

// 3.2

// const user = {nome: 'Diego', idade: 23};
// const idade = u => {
//   return u.idade;
// };

// console.log(idade(user));

// 3.3

// const nome = 'diego';
// const idade = 23;

// const mostraUser = (nome = 'Diego', idade = 18) => {
// 	return {nome, idade};
// };

// console.log(mostraUser(nome, idade));
// console.log(mostraUser(nome));

// 3.4
// const propmise = () => {
// 	return new Promise((resolve, reject) => {
//     return resolve();
//   });
// }

//////////////////////////////////////////
// Exercicio 4
// 4.1

// const empresa = {
// 	nome: 'Rocketseat',
// 	endereco: {
// 		cidade: 'Rio do Sul',
// 	  estado: 'SC',
//   }
// };

// const {nome, endereco: {cidade, estado}} = empresa;

// console.log(nome);
// console.log(cidade);
// console.log(estado);

// 4.2

// function mostraInfo({nome, idade, ...rest}) {
//  return `${nome} tem ${idade} anos.`;
// }

// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//////////////////////////////////////////
// Exercicio 5
// 5.1

// const arr = [1, 2, 3, 4, 5, 6];
// const [x, ...y] = arr;

// console.log(x, y);

// const soma = (...arr) => {
// 	return arr.reduce((total, item) => total += item);
// };

// console.log(soma(1, 2, 3, 4, 5, 6));

// 5.2
// const usuario = {
// 	nome: 'Diego',
// 	idade: 23,
// 	endereco: {
// 		cidade: 'Rio do Sul',
// 		uf: 'SC',
//     pais: 'Brasil',
//   }
// };

// const gabs = {...usuario, nome: 'Gabriel'};
// const lontra = {...usuario, endereco: {...usuario.endereco, cidade: "Lontras"}};

// console.log(gabs, lontra);

///////////////////////////////////////
// Exercicio 7

// const nome = 'Diego';
// const idade = 23;

// const usuario = {
// 	nome,
// 	idade,
// 	cidade: 'Rio do Sul',
// };

// console.log(usuario);

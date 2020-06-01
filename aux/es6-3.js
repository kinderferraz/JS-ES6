import axios from 'axios';

// Exercicio 1

// const delay = (time) =>
//       new Promise(resolve => {
//         setTimeout(() => {resolve(time);}, 1000);
//       });


// async function umPorSegundo() {
// 	console.log(await delay("1s"));
//   console.log(await delay("2s"));
//   console.log(await delay("3s"));
// }

// umPorSegundo();

// Exercicio 2

// async function getUserFromGithub(user) {
// 	try {
//     const data = await axios.get(`https://api.github.com/users/${user}`);
//     console.log(data.data);
//   } catch (err) {
//     console.log('usuario '+user+' nao existe');
//   }
// }

// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// Exercicio 3

// class Github {
//   static async getRepositories(repo) {
//     try{
//       const resp = await axios.get(`https://api.github.com/repos/${repo}`);
//       console.log(resp.data);
//     }catch(err){
//       console.log('Repositório não existe');
//     };
//   }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

// exercicio 4
// const buscaUsuario = async usuario => {
//   try {
//     const resp = await axios.get(`https://api.github.com/users/${usuario}`);
//     console.log(resp.data);
//   } catch (err) {
//     console.log('Usuário não existe');
//   };
// };

// buscaUsuario('diego3g');

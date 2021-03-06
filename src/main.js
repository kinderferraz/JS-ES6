import api from "./api";

class App {
  constructor () {
		this.repositories = [];
    
    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");
    this.inputRepoEl = document.querySelector("input[name=repository]");
    this.inputUserEl = document.querySelector("input[name=user]");

    this.registerHandlers();
  }

  registerHandlers(){
    this.formEl.onsubmit = e => this.addRepository(e);
  }

  setLoading(loading = true){
    if (loading == true){
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando..."));
      loadingEl.setAttribute("id", "carregando");

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById("carregando").remove();

    }
  }

  async addRepository(e){
    e.preventDefault();

    const userInput = this.inputUserEl.value;
    const repoInput = this.inputRepoEl.value;
    
    if (userInput === 0)
      return;
    
    this.setLoading();

    try {
      const response = await api.get(`/repos/${userInput}/${repoInput}`);
      console.log(response);
    
      const {name, description, html_url, owner: {avatar_url}} = response.data;

      this.repositories.push({
        name,
        description,
        html_url,
        avatar_url,
      });

      this.render();
    } catch (err) {
      alert(`${userInput} não possui o repositório ${repoInput}.`);
    }

    this.setLoading(false);
    this.inputUserEl.value = "";
    this.inputRepoEl.value = "";

  }

  render(){
    this.listEl.innerHTML = "";
    this.repositories.forEach(repo => {
      let listItemEl = document.createElement("li");

      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);
      listItemEl.appendChild(imgEl);
      
      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));
      listItemEl.appendChild(titleEl);
      
      let descriptionEl = document.createElement("p");
      if(repo.description !== null)
        descriptionEl.appendChild(document.createTextNode(repo.description));

      listItemEl.appendChild(descriptionEl);
      
      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));
      listItemEl.appendChild(linkEl);
 
      this.listEl.appendChild(listItemEl);
    });
  }
}

const a = new App();

let nomeHeroi = "Agar";
let idade = 102;
let tipo = "Guerreiro";

class Heroi {
  constructor(nomeHeroi, idade, tipo) {
    this.nomeHeroi = nomeHeroi;
    this.idade = idade;
    this.tipo = tipo;
  }

  ataque() {
    if (this.tipo === "Mago") {
      console.log(`O ${this.tipo} atacou usando magia`);
    } else if (this.tipo === "Guerreiro") {
      console.log(`O ${this.tipo} atacou usando espada`);
    } else if (this.tipo === "Monge") {
      console.log(`O ${this.tipo} atacou usando artes marciais`);
    } else if (this.tipo === "Ninja") {
      console.log(`O ${this.tipo} atacou usando shuriken`);
    } else {
      console.log(`O ${this.tipo} atacou de forma desconhecida`);
    }
  }
}

let heroi1 = new Heroi(nomeHeroi, idade, tipo);
heroi1.ataque(); // Correção na chamada do método
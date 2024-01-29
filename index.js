class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "Mago":
        ataque = "magia";
        break;
      case "Guerreiro":
        ataque = "espada";
        break;
      case "Monge":
        ataque = "artes marciais";
        break;
      case "Ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
        break;
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }

  // Método para exibir informações do herói
  mostrarInformacoes() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}`);
  }
}

// Exemplo de uso da classe
const mago = new Heroi("Ryze", 340, "Mago");
mago.mostrarInformacoes();
mago.atacar();

const guerreiro = new Heroi("Garen", 35, "Guerreiro");
guerreiro.mostrarInformacoes();
guerreiro.atacar();

const monge = new Heroi("Lee Sin", 32, "Monge");
monge.mostrarInformacoes();
monge.atacar();

const ninja = new Heroi("Shein", 28, "Ninja");
ninja.mostrarInformacoes();
ninja.atacar();

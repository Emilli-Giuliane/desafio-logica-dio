/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/

  class heroi{
    constructor(nome,idade,tipo,arma){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.arma = arma
    }
}

const h = new heroi("Armaldo", 19, "ninja","shuriken")
console.log("Herói " + h.nome + ", do tipo " + h.tipo + ", atacou usando " + h.arma +".")
const heroi2 = new heroi("josi",24,"Guerreira","espada")
console.log("Herói " + heroi2.nome + ", do tipo " + heroi2.tipo + ", atacou usando " + heroi2.arma +".")
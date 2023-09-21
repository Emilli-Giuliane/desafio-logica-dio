/** # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */
//início(variáveis)
let saldoVitorias = 0
function rankin(vitorias,derrotas){
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}
rankin(10,11)
let nivel = "" //esse é o rankin
//if saldoVitorias > 10  nivel = ferro ...

if(saldoVitorias == 0 || saldoVitorias < 0){
    saldoVitorias = 0
    nivel = "ferro"
}else if(saldoVitorias > -1 && saldoVitorias < 10){
    nivel = "Ferro"
}else if(saldoVitorias >= 10 && saldoVitorias < 20){
    nivel = "Bronze"
}else if(saldoVitorias >= 20 && saldoVitorias < 50){
    nivel = "Prata"
}else if(saldoVitorias >= 50 && saldoVitorias < 80){
    nivel = "Ouro"
}else if(saldoVitorias >= 80 && saldoVitorias < 90){
    nivel = "Diamante"
}else if(saldoVitorias >= 90 && saldoVitorias < 100){
    nivel = "Lendário"
}else if(saldoVitorias >= 100){
    nivel = "Imortal"
}


//dialogo final
console.log("O Herói tem de saldo de vitórias de " + saldoVitorias + " está no nível de " + nivel + ".")

//author: Emilli-Giuliane
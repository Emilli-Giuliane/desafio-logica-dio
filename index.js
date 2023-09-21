let adversario = "Pikachu"
let vidaAdv = 40
let dano = 10
atacar(adversario,dano,vidaAdv)
function atacar(adversario,dano,vidaAdv){
    console.log("pkmn atacou " + adversario + ".")
    dano = 10
    console.log("pkmn causou " + dano + " de dano em " + adversario + "!")
    vidaAdv-=10
    console.log(vidaAdv)
}

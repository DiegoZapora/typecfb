let Musicas: object = {
    nome: "Mentalize",
    album: "Mentalize"
}

console.log(Musicas)

let Albums = {
    nome: "Mentalize",
    ano: 2009,
    velho: () => {console.log("VAI TOMA NO CU")},
    samp: (bmrp:string) => {return bmrp}
}
Albums.velho()
console.log(Albums.samp("VAI SE FUDE"))
Albums.nome = "Samp"
Albums.ano = 2004
console.log(Albums.nome, Albums.ano)
class Andre {
    nome = null 
    album = null
    constructor(nome:any, album:any) {
        this.nome = nome
        this.album = album
    }
}

let a1 = new Andre("Andre Matos", "Mentalize")
console.log(a1.nome, a1.album)
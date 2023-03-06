export class ListaPessoas {

    constructor(lista=[]) { // constructor() {
        this._pessoas = lista // this._pessoas = []
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa)
    }

    // programacao defensiva retornar uma copia do array
    // usando o concat, passando o nosso array como parametro
    get pessoas() {
        //return this._pessoas
        return [].concat(this._pessoas)
    }

}

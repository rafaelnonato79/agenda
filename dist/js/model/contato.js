export class Contato {
    _nome;
    _fone;
    constructor(nome, fone) {
        this._nome = nome;
        this._fone = fone;
    }
    get nome() {
        return this._nome;
    }
    get fone() {
        return this._fone;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set fone(fone) {
        this._fone = fone;
    }
}

export class Contato {
    
    private _nome:string;
    private _fone:string;

    constructor(nome:string, fone:string){
        this._nome = nome;
        this._fone = fone;
    }

    get nome(): string{
        return this._nome;
    }
    get fone(): string{
        return this._fone;
    }
    set nome(nome: string){
        this._nome = nome;
    }    
    set fone(fone: string){
        this._fone = fone
    }
}
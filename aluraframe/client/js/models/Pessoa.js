class Pessoa {

    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
        Object.freeze(this);
    }

    obtemNomeCompleto(){
        return this._nome+" "+this._sobrenome;
    }

}
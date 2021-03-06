export default class Estudante {
    #matricula: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, matricula: string = ''){
        this.#nome = nome
        this.#idade = idade
        this.#matricula = matricula
    }

    static  empty(){
        return new Estudante('', 0, '')
    }
     
    get matricula(){
        return this.#matricula
    }
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }

}
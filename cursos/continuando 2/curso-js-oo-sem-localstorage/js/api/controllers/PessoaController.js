import { Pessoa } from '../models/Pessoa.js'
import { ListaPessoas } from '../models/ListaPessoas.js'
import { PessoasView } from '../views/PessoasView.js'

import { Mensagem } from '../models/Mensagem.js'
import { MensagemView } from '../views/MensagemView.js'

export class PessoaController {
    
    // atributos, propriedades
    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    // metodos

    // construtor
    constructor () {
        this._inputNome   = document.querySelector('#nome')
        this._inputIdade  = document.querySelector('#idade')
        this._inputPeso   = document.querySelector('#peso')
        this._inputAltura = document.querySelector('#altura')

        //criar lista de pessoas e view de Pessoas
        this._listaPessoas =  new ListaPessoas()
        this._pessoasView  =  new PessoasView(document.querySelector('#dados'))
        this._pessoasView.update(this._listaPessoas)
      
        // mensagem
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView(document.querySelector('#mensagem'))
        this._mensagemView.update(this._mensagem)

    }

    // adicionar pessoa
    adiciona(event) {

        event.preventDefault()
        
        // criar uma pessoa
        // adiciona nova pessoa na lista e atualizar a tela
        this._listaPessoas.adiciona(this._criaPessoa())
        this._pessoasView.update(this._listaPessoas)

        // definir e atualizar mensagem
        this._mensagem.texto = 'Pessoa cadastrada com sucesso!'
        this._mensagemView.update(this._mensagem)       

    }
    
    // criar pessoa
    _criaPessoa() {
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }
    
    // limpar formulario
    _limpaFormulario() {
        this._inputNome.value   = ''
        this._inputIdade.value  = ''
        this._inputPeso.value   = ''
        this._inputAltura.value = ''
    
        this._inputNome.focus()
    }

}

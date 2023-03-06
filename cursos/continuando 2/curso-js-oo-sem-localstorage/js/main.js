import { PessoaController } from './api/controllers/PessoaController.js'

const pessoaController = new PessoaController()

// CONTROLAR ENVIO DO FORMULARIO E EXIBICAO NA TABELA
const formulario = document.querySelector('form')

// escutador de evento no formulario
formulario.addEventListener('submit', (event) => {
    
    // adicionar pessoa
    pessoaController.adiciona(event)
    
    // limpar formulario
    pessoaController._limpaFormulario()

})

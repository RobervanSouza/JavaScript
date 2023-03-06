import { View } from '../views/View.js'

export class PessoasView extends View {

    constructor(elemento) {
        super(elemento)
    }

    template(model) {
        return `
            <table>
                <thead>
                    <tr>
                        <th>Nome</th> <th>Idade</th> <th>Peso</th> <th>Altura</th> <th>IMC</th> <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.pessoas.map(pessoa => {
                    return `
                        <tr>
                            <td>${pessoa.nome}</td>
                            <td>${pessoa.idade}</td>
                            <td>${pessoa.peso}</td>
                            <td>${pessoa.altura}</td>
                            <td>${pessoa.imc}</td>
                            <td>${pessoa.classificacao}</td>
                        </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `
    }

    // nao precisa do metodo update aqui pq vc herda da super class
}

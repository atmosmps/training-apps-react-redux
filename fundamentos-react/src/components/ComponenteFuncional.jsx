import React from 'react'

export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo']

    const gerarItens = itens => {
        return itens.map(item => <li>item</li> )
    }
}

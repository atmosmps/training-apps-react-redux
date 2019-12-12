import React from 'react'

/**
 * Componentes baseados em funções, geralmente são utiliazdos quando você não precisa guardar estado.
 * É possível guardar estado em componentes baseados em funções utilizando Hooks.
 * Se precisar de estado, recorrer a um componente baseado em classe.
 * Quando eu preciso apenas passar propriedades de um componente para outro,
 * é geralmente utilizado componentes baseados em função.
 */
export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo']

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li> )
    }

    return (
        <ul>{gerarItens(aprovados)}</ul>
    )
}

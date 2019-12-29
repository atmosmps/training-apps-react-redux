import React from 'react'
import './Button.css'

// Quanto menos componentes com estado, melhor para a aplicação.
// Focar o estado em componentes especificos.
export default props =>
    <button
        onClick={e => props.click && props.click(props.label)}
        className={`
                button
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
            `}>
        {props.label}
    </button>

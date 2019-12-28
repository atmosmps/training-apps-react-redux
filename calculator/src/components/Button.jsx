import React from 'react'
import './Button.css'

// Quanto menos componentes com estado, melhor para a aplicação.
// Focar o estado em componentes especificos.
export default props =>
    <button className='button'>{props.label}</button>

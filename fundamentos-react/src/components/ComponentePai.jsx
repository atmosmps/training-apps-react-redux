import React from 'react'
import ComponenteFilho from './ComponenteFilho'

export default props => {
    const notificarSaidaDoFilho = 
        lugar => alert(`liberado para ${lugar}`)

    return (
        <ComponenteFilho notificarSaida={notificarSaidaDoFilho} ></ComponenteFilho>
    )
}

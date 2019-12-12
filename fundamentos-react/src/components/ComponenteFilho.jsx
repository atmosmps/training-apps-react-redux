import React from 'react'

// O componente pai passa uma função. Componente filho chama a função notificando o componente Pai.
export default props =>
    <div>
        <button
            onClick={ () => props.notificarSaida('Shopping') }>
            Vou Sair
        </button>
    </div>

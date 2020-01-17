import React from 'react'

// Componentes baseados em funções.
const CompA = props =>
    <h1>Primeiro diz: {props.value}</h1>

const CompB = props =>
    <h1>Segundo diz: {props.value}</h1>

export {CompA, CompB}
export default CompA

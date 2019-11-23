import React from 'react'
import Members from './Members'
import {filhosComProps} from '../utils/utils'

// internamente no Javascript, uma classe é uma função.
// export default props =>
//     <div>
//         <Members nome="Rafael" sobrenome="silva"></Members>
//         <Members nome="Rafael" sobrenome="silva"></Members>
//         <Members nome="Rafael" sobrenome="silva"></Members>
//     </div>

export default props =>
    <div>
        <h1>Familia</h1>

        {filhosComProps(props)}
        
        {/* Funciona para clonar somente um componente. */}
        {/* Neste caso, todas as propriedades estão sendo propagadas para o componente filho. */}
        {/* {React.cloneElement(props.children, { ...props })} */}

        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}

        {/* realiza a instancia dos parametros do componente filho. */}
        {/* {props.children} */}
    </div>

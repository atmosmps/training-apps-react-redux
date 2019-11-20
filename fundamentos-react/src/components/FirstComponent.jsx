import React from 'react';

export default (props) =>
    <div>
        <h1>{props.value}</h1>
    </div>

// // Nesta forma de definição de função o return está implicito
// export default () =>
//     <div>
//         <h1>Primeiro Componente</h1>
//     </div>

// Esta é uma forma de escrever e exportar esta função
// function first() {
//     return <h1>Primeiro Componente</h1>
// }
// export default first

// Esta é outra forma de escrever e exportar esta função
// export default function first() {
//     return <h1>Primeiro Componente</h1>
// }

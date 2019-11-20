// import React from 'react';

// Exportar mais de um elemento a partir de um unico componente não é uma boa pratica,
// mas existem formas de faze-lo.

// Solução 03: Usar um formato de array
// export default props => [
//     <h1>Parte 1</h1>,
//     <h1>Parte 2</h1>
// ]

// Solução 02: Usar React.Fragment
// export default props =>
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h1>Parte 2</h1>
//     </React.Fragment>
    
// Solução 01: Usar uma Div
// export default (props) =>
//     <div>
//         <h1>Parte 1</h1>
//         <h1>Parte 2</h1>
//     </div>

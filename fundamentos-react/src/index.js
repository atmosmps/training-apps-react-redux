import ReactDOM from 'react-dom'
import React from 'react'
import {CompA, CompB} from './components/TwoComponents'
// import CompA, {CompB as B} from './components/TwoComponents' // outra forma de fazer um import quando existe um export default

// import FirstComponent from './components/FirstComponent'
// import MultiElements from './components/MultiElements'

const elemento = document.getElementById('root')
// ReactDOM.render(<h1>Olá mundo</h1>, elemento)

ReactDOM.render(
    <div>
        {/* <FirstComponent value={2**8}></FirstComponent> */}
        <CompA value="Olá eu sou o A"></CompA>
        <CompB value="B na área"></CompB>
        {/* <MultiElements></MultiElements> */}
    </div>
, elemento)

/**
 * Uma aplicação em React é uma arvore de componentes que estão interligadas entre si.
 */

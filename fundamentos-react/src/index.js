import ReactDOM from 'react-dom'
import React from 'react'

// import ComponentePai from './components/ComponentePai'

// import {CompA, CompB} from './components/TwoComponents'
// import CompA, {CompB as B} from './components/TwoComponents' // outra forma de fazer um import quando existe um export default

// import FirstComponent from './components/FirstComponent'
// import MultiElements from './components/MultiElements'

// import Familia from './components/Familia'
// import Members from './components/Members'

// import ComponenteComfuncao from './components/ComponenteFuncional'

// ReactDOM.render(<h1>Olá mundo</h1>, elemento)
const elemento = document.getElementById('root')

ReactDOM.render(
    <div>

        {/* <ComponentePai></ComponentePai> */}

        {/* <ComponenteComfuncao/> */}
        {/* <Familia sobrenome="Maciel">
            <Members nome="Atmos"></Members>
            <Members nome="teste"></Members>
        </Familia> */}

        {/* <br></br> */}

        {/* <FirstComponent value={2**8}></FirstComponent> */}
        {/* <CompA value="Olá eu sou o A"></CompA>
        <CompB value="B na área"></CompB> */}
        {/* <MultiElements></MultiElements> */}
    </div>
, elemento)

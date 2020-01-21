import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

import Menu from '../template/Menu'
import Routes from './routes'

export default props => ( // Quando usamos o parênteses estamos retornando uma expressão; não é o corpo da função.
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)

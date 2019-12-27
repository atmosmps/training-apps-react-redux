import React, {Component} from 'react'

/**
 * O react espera que o retorno de um componente funcional seja um JSX e no
 * caso de um componente baseado em classe, ele irá chamar a função render.
 */
export default class Contador extends Component {
    // Problema do "this"

    // Solucao 1 - bind
    // constructor(props) {
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    // Solucao 2 - arrow functions onClick
    // <button onClick={() => this.maisUm()}>Inc</button>

    // Solucao 3 - transformar em funcao arrow
    // maisUm = () => {
    //     console.log(this)
    // }

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    menosUm = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    render() {
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        )
    }
}

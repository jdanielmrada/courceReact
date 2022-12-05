import { Component } from "react"

class Imput extends Component {
    render() {
        return (
            <input
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}
class App extends Component {
    state = {
        nombre: '',
        apellido: '',
    }

    updateValues = (prop, value) => {
        this.setState({ [prop]: value })
    }
    render() {
        return (
            <p>
                Nombre Completo {`${this.state.nombre} ${this.state.apellido}`}
                <Imput
                    value={this.state.nombre}
                    onChange={e => this.updateValues('nombre', e.target.value)}
                />

                <Imput
                    value={this.state.apellido}
                    onChange={e => this.updateValues('apellido', e.target.value)}
                />
            </p>
        )
    }
}

export default App

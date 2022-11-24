import Button from "./button"

const App = () => {
    return (
        <div>
            <h1>Hola mundo</h1>
            <Button onClick={() => console.log('clickead')}>
                Enviar
            </Button>
        </div>
    )
}

export default App

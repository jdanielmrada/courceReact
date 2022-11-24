import logo from './logo.svg';
// import './App.css';
import './main.css'

const estilo2 = {
    boxShadow: '0 5px 3px rgba(0,0,0,0.6)'
}
// ##################################
const estilo = ({ bg = '#333', cl = '#999' }) => ({
    backgroundColor: bg,
    color: cl,
    padding: '10px 15px',
    margin: '10px 15px'
})

const Li = ({ children }) => {
    console.log(children)
    return (
        <li className='class-li'>{children}</li>
    )
}
// tambien puede ser declarado como una
// const App = () =>{}
function App() {
    const valor = 'feliz'
    return (
        <ul className='class-css'>
            <Li estado="enojado">Valor del component</Li>
        </ul>
    );
}

export default App;

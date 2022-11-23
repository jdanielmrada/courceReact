import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// Esta es la manera en la que se ve en the cource pero no funciona para la v-18
// ReactDOM.render(
//     'lala',
//     document.getElementById('root')
// )

// <p>hola mundo</p> -> no recomendada
// const x = React.createElement('p', null, 'hola mundo')
//por buena practicas los component inician con mayuscula
const Li = ({ children, estado, casa, edad }) => {
    console.log(casa, edad)
    return (<li>{children} esta {estado}</li>)
}
const X = () =>
    <ul>
        <Li
            estado={'feliz'}
            casa={false}
            edad={20}
        >Chanchito</Li>
        <Li estado={'triste'}>Chanchito</Li>
        <Li estado={'enojado'}>Chanchito</Li>
    </ul>
// Consegui hacer lo mismo fue utilizando las etiquetas de Ract
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Recibe un jsx lo cual es lo mas optimo (React.createElemnt())
    <X />


);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

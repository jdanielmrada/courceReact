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
//
const X = () => <p>hola mundo</p>
// Consegui hacer lo mismo fue utilizando las etiquetas de Ract
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Recibe un jsx lo cual es lo mas optimo (React.createElemnt())
    <X />

    // <p>hola mundo</p> no no se puede renderizar codigo html puro
    // x -> fijate la variable pude ser sustituida por el htm mas no es lo indicado
    // #########################################################################
    // <React.StrictMode>
    //     {/* <App /> */}

    // </React.StrictMode>->OJO CON ESTO FIJATE ESTO YA ES PARTE DE UN COMPONENT FOR LO WHAT TE VA DAR PROBLEMA SI QUIERES METER OTRO COMPONENT. ES DECIR ESTO NO ES NECESARIO.
    // ###########################################################################
    // COMPONENT FUNCIONAL
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

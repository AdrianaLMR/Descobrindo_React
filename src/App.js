//componente pricipal da aplicação
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FunctionComponent, ClassComponent, MyComponent, JSXComponent, JSXContainer } from './MyComponents.js' // Importando os componentes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='title-principal'>Descobrindo o React</h1>
      </header>
      <div className='container-coponent'>
        <MyComponent />
        <FunctionComponent />
        <ClassComponent />
        <JSXComponent />
      </div>
      <hr />
      <div>
        <JSXContainer />
      </div>
    </div>
  );
}

export default App;
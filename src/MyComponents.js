// Components.js
import React from 'react';
import './Components.css';
import { useState } from 'react';

function MyComponent() {
  return (
    <div className="my-component">
      <h1>Tipos de componentes!</h1>
    </div>
  );
}
// Componente de Função
function FunctionComponent() {
  return (
    <div className="function-component">
      <h2>Componente de Função</h2>
      <p>Os componentes de função em React são funções JavaScript que retornam elementos React. São ideais para criar componentes simples e reutilizáveis, pois não possuem estado interno nem métodos de ciclo de vida. Eles são fáceis de entender e testar, sendo uma escolha comum para partes da interface do usuário baseadas em entrada de dados.</p>
    </div>
  );
}

// Componente de Classe
class ClassComponent extends React.Component {
  render() {
    return (
      <div className="class-component">
        <h2>Componente de Classe</h2>
        <p>
          Os componentes de classe em React são definidos como classes que estendem React.Component. Possuem estado interno e métodos de ciclo de vida, sendo mais adequados para componentes complexos que exigem gerenciamento de estado e lógica de renderização personalizada. Oferecem maior flexibilidade e funcionalidades, mas são mais verbosos que os componentes de função.
        </p>
      </div>
    );
  }
}

//Componenete JSX
function JSXComponent() {
  const message = "Componente JSX";

  const list = (
    <div>
      <p>Aspas para strings: Use aspas para definir o valor do atributo como uma string fixa. Por exemplo, className="avatar" define className como "avatar".</p>
      <p>Chaves para expressões JavaScript: Use chaves para avaliar o valor do atributo como uma expressão JavaScript dinâmica. Por exemplo, {'src={user.imageUrl}'} define src como o valor da variável user.imageUrl. Isso permite valores calculados dinamicamente.</p>
    </div>
  );

  return (
    <div className="jsx-component">
      <h2>{message}</h2>
      <p> É uma representação de um elemento de interface do usuário em React usando uma sintaxe semelhante ao HTML, mas que é traduzida para chamadas de função JavaScript durante a compilação. JSX (JavaScript XML) é uma extensão de sintaxe que permite escrever estruturas de árvore de elementos de forma mais declarativa e intuitiva em comparação com o JavaScript puro.</p>
      {list}
    </div>
  )
}

// Components do topico JSX

// Renderização Condicional
function RenderizacaoCondicional() {
  const isMorning = true;
  return (
    <div>
      <h2>Renderização Condicional</h2>
      <p>
        Renderização condicional é a prática de renderizar diferentes elementos ou componentes dependendo de alguma condição. No exemplo abaixo, uma mensagem de "Bom dia!" ou "Boa tarde!" é exibida dependendo da variável <strong>isMorning</strong>.
      </p>
      <h2>{isMorning ? 'Bom dia!' : 'Boa tarde!'}</h2>
    </div>
  );
}

// Renderização de Listas
function RenderizacaoDeListas() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <h2>Renderização de Listas</h2>
      <p>
        A renderização de listas em React é feita utilizando o método <strong>map</strong>. No exemplo abaixo, um array de números é mapeado para uma lista de elementos <strong>&lt;li&gt;</strong>.
      </p>
      <ul>
        {numbers.map(number => (
          <li key={number.toString()}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

// Adicionando Estilos
function AdicionandoEstilos() {
  const divStyle = {
    width: '25%',
    color: '#005f6b',
    backgroundColor: 'lightgray',
    padding: '1%',
    paddingLeft: '5%'
  };
  return (
    <div>
      <h2>Adicionando Estilos</h2>
      <p>
        Estilos podem ser adicionados diretamente aos elementos JSX usando objetos de estilo. No exemplo abaixo, o <strong>div</strong> tem cor azul e fundo cinza claro.
      </p>
      <div style={divStyle}>Este é um div estilizado</div>
    </div>
  );
}

// Exibindo Dados
function ExibindoDados() {
  const name = 'John Doe';
  return (
    <div>
      <h2>Exibindo Dados</h2>
      <p>
        Dados podem ser exibidos em JSX usando chaves <strong>{'{}'}</strong>. No exemplo abaixo, o nome armazenado na variável <strong>name</strong> é exibido.
      </p>
      <h2>Hello, {name}!</h2>
    </div>
  );
}

// Respondendo Eventos
function RespondendoEventos() {
  function handleClick() {
    alert('Button clicked!');
  }
  return (
    <div>
      <h2>Respondendo Eventos</h2>
      <p>
        Eventos podem ser respondidos em JSX atribuindo funções de callback aos manipuladores de eventos. No exemplo abaixo, um alerta é exibido quando o botão é clicado.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// Atualizando Tela
function AtualizandoTela() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Atualizando Tela</h2>
      <p>
        O estado de um componente pode ser atualizado usando o hook <strong>useState</strong>. No exemplo abaixo, um contador é atualizado cada vez que o botão é clicado.
      </p>
      <div>
      <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
}

// Compartilhando Dados entre Componentes
function CompartilhandoDadosEntreComponentes() {
  const [message, setMessage] = useState('Mensagem do pai');
  return (
    <div>
      <h2>Compartilhando Dados entre Componentes</h2>
      <p>
        Dados podem ser passados de um componente pai para um componente filho através de props. No exemplo abaixo, o componente pai passa uma mensagem para o componente filho.
      </p>
      <div>
        <h2>Componente Pai</h2>
        <ComponenteFilho message={message} />
      </div>
    </div>
  );
}


function ComponenteFilho({ message }) {
  return <h2>{message}</h2>;
}

// JSX Container
class JSXContainer extends React.Component {
  render() {
    return (
      <div className='JSX-container'>
        <h1>JSX</h1>
        <p>
          Em React, um componente é uma representação de um elemento da interface do usuário. Ele é escrito usando JSX, uma sintaxe semelhante ao HTML, onde as tags precisam ser fechadas, como {`<br />`}. Quando você cria um componente, é importante notar que ele não pode retornar várias tags JSX diretamente. Em vez disso, você precisa envolvê-las em um elemento pai compartilhado, como um wrapper {`<div>...</div>`}, mesmo que esse wrapper esteja vazio.
        </p>
        <div className='usabilidade-jsx'>
          <h3>Exemplos com JSX</h3>
          <RenderizacaoCondicional />
          <RenderizacaoDeListas />
          <AdicionandoEstilos />
          <ExibindoDados />
          <RespondendoEventos />
          <AtualizandoTela />
          <CompartilhandoDadosEntreComponentes />
        </div>
      </div>
    );
  }
}


export { FunctionComponent, ClassComponent, MyComponent, JSXComponent, JSXContainer };

import './App.css';

import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = "Fulano"
  return (
    <div className="App">      
      <Frase />
      <Frase />
      <DigaMeuNome nome="Anderson Vanin"/>
      <DigaMeuNome nome="João da Silva"/>
      <DigaMeuNome nome={nome}/>
      <Pessoa
        nome="Anderson"
        idade="48"
        profissao="Professor"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
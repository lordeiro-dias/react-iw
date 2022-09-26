import './App.css';

import DigaMeuNome from './components/DigaMeuNome';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Fulano"
  return (
    <div className="App">      
      <Frase />
      <Frase />
      <DigaMeuNome nome="Anderson"/>
      <DigaMeuNome nome="João"/>
      <DigaMeuNome nome={nome}/>
      <Pessoa
        nome="Anderson"
        idade="48"
        profissao="Professor"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
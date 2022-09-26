import './App.css';
import HelloWorld from './components/HelloWorld';
const nome = 'Anderson'

function App() {
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {nome}</p>
      <HelloWorld />
    </div>
  );
}

export default App;
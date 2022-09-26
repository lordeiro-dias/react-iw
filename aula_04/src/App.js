import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento palavra="Oi"/>
      <Evento palavra="Tudo Bem!"/>
      <Form />
    </div>
  );
}

export default App;
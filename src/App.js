import './App.css';
import InputSearh from './components/InputSearh';
import {Routes, Route } from 'react-router';
import CardCharacter from './components/CardCharacter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Personagens da Marvel</h1>
      </header>
      <section>
        <InputSearh />
      </section>
      <Routes>
        <Route exact path="/cards/:id" element={ <CardCharacter /> } />
      </Routes>
    </div>
  );
}

export default App;

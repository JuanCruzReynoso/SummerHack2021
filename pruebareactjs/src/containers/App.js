import logo from '../assets/statics/logo.svg';
import '../assets/css/App.css';
import EjemploComponente from '../components/EjemploComponente';
import EjemploHooks from '../components/EjemploHooks';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <header className="App-header">
        <EjemploComponente></EjemploComponente>
        <img src={logo} className="App-logo" alt="logo" />
        <EjemploHooks></EjemploHooks>
      </header>
    </div>
  );
}

export default App;

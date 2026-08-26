import Dashboard from './components/Dashboard';
import './App.css';

// Dejé la funcion lo más limpio posible para que fuera modular y facil de leer, aquí solo tenemos el componente
// Dashboard que integra toda la tabla
function App() {
  return (
    <div className="app-container">
      <Dashboard />
    </div>
  );
}

export default App;
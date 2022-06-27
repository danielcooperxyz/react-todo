import logo from './logo.svg';
import './App.css';

import TodoList from './components/todo-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Todays Todos</h2>
      </header>
      <TodoList />
    </div>
  );
}

export default App;

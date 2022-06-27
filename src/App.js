import React, { useState, useEffect } from "react"
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

import TodoList from './components/todo-list';

function App() {
  const [data, setData] = useState([{"name": "foo"}, {"name": "bar"}])
  const [selected, setSelected] = useState(0)
  
  useEffect(() => {
      let ignore = false

      async function fetchData() {
          const result = await axios('https://demo.minder.care/interview/task')
          
          if (!ignore) { setData(result.data) }
      }
      fetchData()

      return () => ignore = true
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Todays Todos</h2>
      </header>
      <main>
        <TodoList 
          list={data} 
          onSelect={(index) => {
            setSelected(index)
          }}/>
      </main>
    </div>
  );
}

export default App;

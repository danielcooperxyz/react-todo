import React, { useState, useEffect } from "react"
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

import TodoList from './components/todo-list';
import TodoDetails from "./components/todo-details";

function App() {
  const [ignore, setIgnore] = useState(false)
  const [data, setData] = useState([{"name": "foo"}, {"name": "bar"}])
  const [selected, setSelected] = useState(0)
  
  const updateStatus = (newStatus, id) => { 
    let temp = data[id]
    const newData = [...data]

    temp.status = newStatus

    newData[id] = temp
    setData(newData)
  }

  useEffect(() => {
      async function fetchData() {
          const result = await axios('https://demo.minder.care/interview/task')
          
          if (!ignore) { setData(result.data) }
      }
      fetchData()

      return () => setIgnore(true)
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
        <TodoDetails item={data[selected]} id={selected} updateStatus={updateStatus} />
      </main>
    </div>
  );
}

export default App;

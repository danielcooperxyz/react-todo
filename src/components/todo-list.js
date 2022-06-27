import React, { useState, useEffect } from "react"
import axios from 'axios'

import TodoItem from "./todo-item"

function TodoList() {
    const [data, setData] = useState([{"name": "foo"}, {"name": "bar"}])
    
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
        <>
          <ul>
            {data.map(item => <TodoItem item={item} />)}
          </ul>
        </>
    );
}

export default TodoList
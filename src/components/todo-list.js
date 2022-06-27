import './todo-list.css'

import TodoItem from "./todo-item"

function TodoList({list, onSelect, updateStatus}) {
    return (
        <>
          <ul className="todo-list">
            {list.map((item, i) => <TodoItem key={i} item={item} onClick={() => onSelect(i)} updateStatus={updateStatus}/>)}
          </ul>
        </>
    );
}

export default TodoList
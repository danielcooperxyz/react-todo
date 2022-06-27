import './todo-list.css'

import TodoItem from "./todo-item"

function TodoList({list, onSelect}) {
    return (
        <>
          <ul className="todo-list">
            {list.map((item, i) => <TodoItem key={i} item={item} onClick={() => onSelect(i)} />)}
          </ul>
        </>
    );
}

export default TodoList
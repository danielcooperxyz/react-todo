
function TodoItem({ item }) {

    return (
        <>
          <li>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.status}</p>
            <p>{item.createdAt}</p>
            <p>{item.dueDate}</p>
          </li>
        </>
    );
}

export default TodoItem
function TodoActions({status, statusModifier, id}) {
  let pending, progress, completed = false
  switch(status) {
    case "NotStarted":
      progress = true
      completed = true
      break
    case "InProgress":
      pending = true
      completed = true
      break
    case "Completed":
      progress = true
      pending = true
      break
    default:
      break
    }

    let buttons = []

    if (pending) {
      buttons.push(<button key="pending" onClick={() => statusModifier("NotStarted", id)}>Mark Pending</button>)
    }

    if (progress) {
      buttons.push(<button key="progress" onClick={() => statusModifier("InProgress", id)}>Mark In Progress</button>)
    }

    if (completed) {
      buttons.push(<button key="completed" onClick={() => statusModifier("Completed", id)}>Mark Completed</button>)
    }

    return (
        <div className="todo-actions">
          {buttons}
        </div>
    );
}

export default TodoActions
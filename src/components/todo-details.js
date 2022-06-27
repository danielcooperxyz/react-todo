import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDateTime } from "../helpers/date";
import { getStatusColour } from "../helpers/status";
import { getStatusIcon } from "../helpers/status";

import TodoActions from "./todo-actions";

function TodoDetails({ item, id, updateStatus}) {
    return (
        <div className="todo-details" style={{backgroundColor:getStatusColour(item.status)}}>
            <h3><FontAwesomeIcon icon={getStatusIcon(item.status)} />{item.name}</h3>
            <p>Created At: {formatDateTime(item.createdAt)}</p>
            <p>Due: {formatDateTime(item.dueDate)}</p>
            <p>{item.description ? item.description : " Not specified"}</p>

            
            <TodoActions status={item.status} statusModifier={updateStatus} id={id} />
        </div>
    );
}

export default TodoDetails
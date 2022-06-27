import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStatusColour } from "../helpers/status";
import { getStatusIcon } from "../helpers/status";


function TodoItem({ item, onClick}) {
    return (
        <>
          <li style={{backgroundColor:getStatusColour(item.status)}} onClick={onClick}>
            <h3><FontAwesomeIcon icon={getStatusIcon(item.status)} />{item.name}</h3>
            <p>{item.dueDate}</p>
          </li>
        </>
    );
}

export default TodoItem
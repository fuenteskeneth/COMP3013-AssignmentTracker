import { TAssignment } from "../Types/TAssignment";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

interface AssignmentProps {
  element: TAssignment;
  onDone: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Assignment({element, onDone, onDelete}: AssignmentProps) {
  const onDoneClick = function() {
    onDone(element.id);
  }

  const dueDateCount = Math.ceil((element.dueDate-today)/1000/60/60/24);

  let dueDayText = "";
 
  if (dueDateCount < 1) {
    dueDayText = "Now"
  }
  else if (dueDateCount == 1) {
    dueDayText = "Tomorrow"
  }
  else {
    dueDayText = `${dueDateCount} Days`
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onDoneClick}>
        { (element.isDone) ? (<BsCheckCircleFill />) : (<div />)}
        
      </button>

      <p className={element.isDone ? styles.textCompleted : ''}>{element.title} <span className={`${(dueDateCount>1) ? styles.dateBubble: styles.dateBubbleDue}`}>Due: {dueDayText}</span></p>

      <button className={styles.deleteButton} onClick={() => onDelete(element.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

import styles from "./Task.module.css";
import { Check, Circle, Trash } from "phosphor-react";
import { TaskType } from "./TodoList";

interface TaskProps {
  task: TaskType;
  onTrashClick: (taskId: string) => void;
  onCheckTask: (taskId: string) => void;
  taskId: string;
}

export const Task = ({
  task,
  onTrashClick,
  onCheckTask,
  taskId,
}: TaskProps) => {
  const handleTrashClick = () => {
    onTrashClick(taskId);
  };

  const handleCheckUncheck = () => {
    onCheckTask(taskId);
  };

 
  const taskTitle = !task.isCompleted ? <p>{task.title}</p> : <p><s>{task.title}</s></p>
  
  return (
    <div className={styles.taskBox}>
      <div className={styles.title}>
        {!task.isCompleted && (
          <Circle
            onClick={handleCheckUncheck}
            className={styles.unchecked}
            size={16}
          />
        )}
        {task.isCompleted && (
          <Check
            onClick={handleCheckUncheck}
            className={styles.checked}
            size={16}
          />
        )}
        {taskTitle}
      </div>
      <Trash onClick={handleTrashClick} className={styles.trash} />
    </div>
  );
};
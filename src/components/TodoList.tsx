import styles from "./TodoList.module.css";
import clipBoard from "../assets/clipboard.svg";
import { Task } from "./Task";

export interface TaskType {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoProp {
  todos: TaskType[];
  onRemoveTodo: (taskIdToBeRemoved: string) => void;
  onCheckTodo: (taskIdToBeUpdated: string) => void;
}

export const TodoList = ({ todos, onRemoveTodo, onCheckTodo }: TodoProp) => {
  const handleRemoveTask = (taskIdToBeRemoved: string) => {
    onRemoveTodo(taskIdToBeRemoved);
  };

  const handleCheckTodo = (taskIdToBeUpdated: string) => {
    onCheckTodo(taskIdToBeUpdated);
  };

  const sortedTodos = todos.sort((a, b) => {
    if (a.isCompleted && !b.isCompleted) {
      return 1;
    } else if (!a.isCompleted && b.isCompleted) {
      return -1;
    } else {
      return 0;
    }
  });

  const amountOfCompletedTasks = todos.filter((task) => task.isCompleted);

  const completedTasksProgress = amountOfCompletedTasks.length
    ? `${amountOfCompletedTasks.length} de ${todos.length}`
    : "0";

  return (
    <>
      <div className={styles.head}>
        <div className={styles.openTasks}>
          <p>Tarefas criadas</p>
          <span>{todos.length}</span>
        </div>
        <div className={styles.doneTasks}>
          <p>Concluídas</p>
          <span>{completedTasksProgress}</span>
        </div>
      </div>
      <div className={styles.tasksList}>
        {!todos.length && (
          <div className={styles.emptyTaskList}>
            <img src={clipBoard} alt="clip-board" />
            <p style={{ fontWeight: "bold" }}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
        {sortedTodos.map((task) => (
          <Task
            key={task.id}
            onCheckTask={handleCheckTodo}
            taskId={task.id}
            task={task}
            onTrashClick={handleRemoveTask}
          />
        ))}
      </div>
    </>
  );
};

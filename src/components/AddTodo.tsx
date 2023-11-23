import { PlusCircle } from "phosphor-react";
import styles from "./AddTodo.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "./TodoList";

interface AddTodoProps {
  onAddTodo: (newTask: TaskType) => void;
}

export const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleSubmitTodo = (event: FormEvent) => {
    event.preventDefault();
    onAddTodo({
      id: uuidv4(),
      title: newTodoTitle,
      isCompleted: false,
    });
    setNewTodoTitle("");
  };

  const handleNewTodoTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(event.target.value);
  };

  return (
    <form onSubmit={handleSubmitTodo} className={styles.form}>
      <input
        onChange={handleNewTodoTitle}
        value={newTodoTitle}
        type="text"
        name="todo"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
};

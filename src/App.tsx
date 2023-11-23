import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { TaskType, TodoList } from "./components/TodoList";

import "./globals.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<TaskType[]>([
    // {
    //   id: "1",
    //   title: "teste 1",
    //   isCompleted: true,
    // },
    // {
    //   id: "2",
    //   title: "teste 2",
    //   isCompleted: false,
    // },
    // {
    //   id: "3",
    //   title: "teste 3",
    //   isCompleted: false,
    // },
    // {
    //   id: "4",
    //   title: "teste 4",
    //   isCompleted: false,
    // },
  ]);

  const addTodoHandler = (newTask: TaskType) => {
    setTodos((prevTodos) => {
      return [...prevTodos, newTask];
    });
  };

  const removeTask = (taskIdToBeRemoved: string) => {
    const updatedTodoList = todos.filter(
      (task) => task.id !== taskIdToBeRemoved
    );
    setTodos(updatedTodoList);
  };

  const checkTodo = (taskIdToBeUpdated: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((task) =>
        task.id === taskIdToBeUpdated
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    });
  };

  return (
    <div className={styles.appBody}>
      <Header />
      <main className={styles.content}>
        <AddTodo onAddTodo={addTodoHandler} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTask}
          onCheckTodo={checkTodo}
        />
      </main>
    </div>
  );
}

export default App;



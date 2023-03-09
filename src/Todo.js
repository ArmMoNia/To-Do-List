import { useState, useEffect } from "react";
import classes from "./Todo.module.css";
import Mytask from "./Mytask";

const Todo = () => {
  const [inputTask, setInputTask] = useState("");
  const [allMyTask, setAllMyTask] = useState([]);

  const onChaneInputTaskHandler = (event) => {
    setInputTask(event.target.value);
  };

  useEffect(() => {
    const tasksFromStorage = [];
    for (let i = 1; i < localStorage.length; i++) {
      const task = localStorage.getItem(`Task number: ${i}`);
      tasksFromStorage.push(task);
    }
    setAllMyTask(tasksFromStorage);
  }, []);

  const addTaskHandler = () => {
    if (inputTask !== "") {
      localStorage.setItem(`Task number: ${allMyTask.length + 1}`, inputTask);
      setAllMyTask([...allMyTask, inputTask]);
      setInputTask("");
    }
  };

  const delTaskHandler = (index) => {
    const keyName = `Task number: ${index + 1}`;
    localStorage.removeItem(keyName);
    const updatedTasks = allMyTask.filter((task, i) => i !== index);
    setAllMyTask(updatedTasks);

    for (let i = index + 1; i < localStorage.length; i++) {
      const nextKeyName = `Task number: ${i + 1}`;
      const nextTask = localStorage.getItem(nextKeyName);
      localStorage.removeItem(nextKeyName);
      localStorage.setItem(`Task number: ${i}`, nextTask);
    }
  };

  return (
    <div className={classes[`todo-container`]}>
      <h1 className={classes[`todo-header`]}>What's your task?</h1>
      <div className={classes[`todo-plan`]}>
        <input
          type="text"
          placeholder="My task..."
          value={inputTask}
          onChange={onChaneInputTaskHandler}
        />
        <button onClick={addTaskHandler}>Add Task</button>
      </div>
      <Mytask myTask={allMyTask} delTask={delTaskHandler} />
    </div>
  );
};

export default Todo;

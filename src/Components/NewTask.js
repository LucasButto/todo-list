import React, { useContext, useState } from "react";
import TaskContext from "../Contexts/TasksContext";
import "../Styles/NewTask.css";

const NewTask = () => {
  const [inputNewTask, setInputNewTask] = useState();
  const { tasks, setTasks } = useContext(TaskContext);

  const taskHandler = (e) => {
    setInputNewTask(e.target.value);
  };

  const objTaskHandler = () => {
    const objTask = {
      task: inputNewTask,
      isCompleted: false,
    };

    return objTask;
  };

  const submitNewTaskHandler = () => {
    if (inputNewTask !== "") {
      setInputNewTask("");
      setTasks([...tasks, objTaskHandler()]);
      console.log(tasks);
    }
  };

  return (
    <>
      <div className="new-task-container">
        <input
          className="new-task-input"
          type="text"
          placeholder="Enter the new task"
          value={inputNewTask}
          onChange={taskHandler}
        />
        <button className="new-task-button" onClick={submitNewTaskHandler}>
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;

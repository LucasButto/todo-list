import React, { useContext } from "react";
import TaskContext from "../Contexts/TasksContext";
import "../Styles/NewTask.css";

const NewTask = ({
  inputNewTask,
  setInputNewTask,
  showEditButton,
  showAddButton,
  setShowEditButton,
  setShowAddButton,
  id,
}) => {
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
      setTasks([...tasks, objTaskHandler()]);
      setInputNewTask("");
    }
  };

  const submitEditedTaskHandler = () => {
    if (inputNewTask !== "") {
      const newTasks = [...tasks];
      newTasks[id].task = inputNewTask;
      setTasks(newTasks);
      setInputNewTask("");
      setShowEditButton(false);
      setShowAddButton(true);
    }
  };

  const enterPressed = (e) => {
    if (e.key === "Enter") {
      if (showAddButton) {
        submitNewTaskHandler();
      } else {
        submitEditedTaskHandler();
      }
    }
  };

  window.onkeydown = enterPressed;

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
        {showAddButton && (
          <button className="new-task-button" onClick={submitNewTaskHandler}>
            Add Task
          </button>
        )}
        {showEditButton && (
          <button
            className="new-task-button edit"
            onClick={submitEditedTaskHandler}
          >
            Edit Task
          </button>
        )}
      </div>
    </>
  );
};

export default NewTask;

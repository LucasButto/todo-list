import React, { useContext } from "react";
import TaskContext from "../Contexts/TasksContext";
import "../Styles/InProgressTask.css";
import "../Styles/CompletedTasks.css";

const CompletedTasks = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const deleteTaskHandler = (deleteItem) => {
    const newTasks = tasks.filter((item) => item.task !== deleteItem);
    setTasks(newTasks);
  };

  const editTaskHandler = (item) => {
    console.log("edit");
  };

  const completeTaskHandler = (itemChangeStatus) => {
    const statusTask = tasks.filter((item) => item.task === itemChangeStatus);
    statusTask[0].isCompleted = !statusTask[0].isCompleted;

    const index = tasks.findIndex((item) => {
      return item.task === statusTask[0].task;
    });

    const newTasks = [...tasks];
    newTasks[index] = statusTask[0];
    setTasks(newTasks);
  };

  return (
    <div>
      <div>
        <h3 className="title">Completed Task</h3>
        {Object.entries(tasks).length === 0 ? (
          <p className="task-container no-task">No task completed</p>
        ) : (
          tasks
            .filter((item) => Boolean(item.isCompleted) === true)
            .map((item) => (
              <div className="task-container">
                <p className="task-text completed-text">{item.task}</p>
                <input
                  type="checkbox"
                  className="completed"
                  onChange={() => completeTaskHandler(item.task)}
                />
                <button className="task-edit-button" onClick={editTaskHandler}>
                  Edit
                </button>
                <button
                  className="task-delete-button"
                  onClick={() => deleteTaskHandler(item.task)}
                >
                  Delete
                </button>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default CompletedTasks;

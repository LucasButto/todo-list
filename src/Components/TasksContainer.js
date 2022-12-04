import React, { useContext } from "react";
import TaskContext from "../Contexts/TasksContext";
import "../Styles/TasksContainer.css";

const TasksContainer = ({
  deleteTaskHandler,
  editTaskHandler,
  completeTaskHandler,
  title,
  noTask,
  extraClass,
  filter,
}) => {
  const { tasks } = useContext(TaskContext);

  const showNoTasks = tasks.filter(
    (item) => Boolean(item.isCompleted) === filter
  );

  return (
    <div>
      <h3 className="title">{title}</h3>
      {Object.entries(showNoTasks).length === 0 ? (
        <p className="task-container no-task">{noTask}</p>
      ) : (
        tasks
          .filter((item) => Boolean(item.isCompleted) === filter)
          .map((item) => (
            <div className="task-container ">
              <p className={"task-text " + extraClass}>{item.task}</p>
              <input
                type="checkbox"
                className="completed"
                onChange={() => completeTaskHandler(item.task)}
                checked={filter}
              />
              {!filter && (
                <button
                  className="task-edit-button"
                  onClick={() => editTaskHandler(item.task)}
                >
                  Edit
                </button>
              )}
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
  );
};

export default TasksContainer;

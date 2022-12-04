import { useState, createContext, useEffect } from "react";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const localTasks = () => {
    let localTasksStorage = localStorage.getItem("TASKS");
    if (localTasksStorage === null) {
      localStorage.setItem("TASKS", JSON.stringify([]));
      return [];
    } else {
      return JSON.parse(localTasksStorage);
    }
  };

  const [tasks, setTasks] = useState(localTasks());

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContextProvider };
export default TaskContext;

import { useState, createContext } from "react";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  // const localTasks = () => {
  //   let localTasksStorage = localStorage.getItem("TASKS");
  //   if (localTasksStorage === null) {
  //     localStorage.setItem("TASKS", []);
  //     return [];
  //   } else {
  //     return localTasksStorage;
  //   }
  // };

  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContextProvider };
export default TaskContext;

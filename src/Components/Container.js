import React, { useContext, useState } from "react";
import TaskContext from "../Contexts/TasksContext";
import "../Styles/Container.css";
import NewTask from "./NewTask";
import TasksContainer from "./TasksContainer";

const Container = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [inputNewTask, setInputNewTask] = useState();
  const [showAddButton, setShowAddButton] = useState(true);
  const [showEditButton, setShowEditButton] = useState(false);
  const [id, setId] = useState();

  const deleteTaskHandler = (deleteItem) => {
    const newTasks = tasks.filter((item) => item.task !== deleteItem);
    setTasks(newTasks);
  };

  const editTaskHandler = (editItem) => {
    setInputNewTask(editItem);
    setShowAddButton(false);
    setShowEditButton(true);
    setId(tasks.findIndex((item) => item.task === editItem));
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
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <NewTask
        inputNewTask={inputNewTask}
        setInputNewTask={setInputNewTask}
        showAddButton={showAddButton}
        showEditButton={showEditButton}
        id={id}
        setShowAddButton={setShowAddButton}
        setShowEditButton={setShowEditButton}
      />
      <hr />
      <TasksContainer
        deleteTaskHandler={deleteTaskHandler}
        editTaskHandler={editTaskHandler}
        completeTaskHandler={completeTaskHandler}
        title={"In Progress Task"}
        noTask={"No task to do"}
        filter={false}
      />
      <hr />
      <TasksContainer
        deleteTaskHandler={deleteTaskHandler}
        editTaskHandler={editTaskHandler}
        completeTaskHandler={completeTaskHandler}
        title={"Completed Task"}
        noTask={"No task completed"}
        filter={true}
        extraClass={"completed-text"}
        checked={"checked"}
      />
    </div>
  );
};

export default Container;

import React from "react";
import "../Styles/Container.css";
import CompletedTasks from "./CompletedTasks";
import InProgressTask from "./InProgressTask";
import NewTask from "./NewTask";

const Container = () => {
  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <NewTask />
      <hr />
      <InProgressTask />
      <hr />
      <CompletedTasks />
    </div>
  );
};

export default Container;

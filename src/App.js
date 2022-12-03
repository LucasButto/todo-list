import "./App.css";
import Container from "./Components/Container";
import { TaskContextProvider } from "./Contexts/TasksContext";

function App() {
  return (
    <>
      <TaskContextProvider>
        <Container />
      </TaskContextProvider>
    </>
  );
}

export default App;

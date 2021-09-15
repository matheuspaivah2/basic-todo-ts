import { TodoProvider } from "./Hooks/TodoContext";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Routes />
    </TodoProvider>
  );
}

export default App;

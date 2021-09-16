import { Toaster } from "react-hot-toast";
import { TodoProvider } from "./Hooks/TodoContext";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Routes />
      <Toaster />
    </TodoProvider>
  );
}

export default App;

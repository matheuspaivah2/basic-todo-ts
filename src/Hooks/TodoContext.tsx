import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { api } from "../services/api";
import { TodoProps } from "../Types/types";

type TodoFieldsProps = Omit<TodoProps, "id" | "createdAt">;

interface TodoContextProps {
  userTodo: TodoProps[];
  loadTodo: () => void;
  createTodo: (todoFields: TodoFieldsProps) => Promise<void>;
  setUserTodo: React.Dispatch<SetStateAction<TodoProps[]>>;
}

interface TodoProviderPros {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const TodoProvider = ({ children }: TodoProviderPros) => {
  const [userTodo, setUserTodo] = useState<TodoProps[]>([]);

  const loadTodo = () => {
    api.get("todos").then((response) => setUserTodo(response.data.todos));
  };

  async function createTodo(todoFields: TodoFieldsProps) {
    await api.post("/todos", {
      ...todoFields,
      createdAt: new Date(),
    });

    loadTodo();
    toast.success("Task created");
  }

  useEffect(() => {
    loadTodo();
  }, []);

  return (
    <TodoContext.Provider
      value={{ userTodo, loadTodo, createTodo, setUserTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

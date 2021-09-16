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
  todoList: TodoProps[];
  loadTodo: () => void;
  createTodo: (todoFields: TodoFieldsProps) => Promise<void>;
  setTodoList: React.Dispatch<SetStateAction<TodoProps[]>>;
}

interface TodoProviderPros {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export const TodoProvider = ({ children }: TodoProviderPros) => {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);

  const loadTodo = () => {
    api.get("todos").then((response) => setTodoList(response.data.todos));
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
      value={{ todoList, loadTodo, createTodo, setTodoList }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

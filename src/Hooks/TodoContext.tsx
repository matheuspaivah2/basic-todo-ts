import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { TodoProps } from "../Types/types";

type TodoFieldsProps = Omit<TodoProps, "id">;

interface TodoContextProps {
  userTodo: TodoProps[];
  loadTodo: () => void;
  creacteTodo: (todo: TodoProps) => Promise<void>;
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

  async function creacteTodo(todoFields: TodoFieldsProps) {
    const response = await api.post("/todos", {
      ...todoFields,
      createdAt: new Date(),
    });
    const { todo } = response.data;

    setUserTodo([...userTodo, todo]);
  }

  useEffect(() => {
    console.log("exe");
    loadTodo();
  }, []);

  return (
    <TodoContext.Provider value={{ userTodo, loadTodo, creacteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

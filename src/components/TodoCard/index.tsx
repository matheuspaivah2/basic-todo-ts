import { Container } from "./styles";
import { TodoProps } from "../../Types/types";
import { AiFillCheckCircle } from "react-icons/ai";
import { useTodo } from "../../Hooks/TodoContext";
import toast from "react-hot-toast";
import { api } from "../../services/api";

interface TodoCardProps {
  todo: TodoProps;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  const { userTodo, loadTodo } = useTodo();
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
  };

  const handleCheck = async () => {
    userTodo[todo.id - 1]["isCompleted"] = true;

    await api.patch(`/todos/${todo.id}`, {
      ...userTodo[todo.id - 1],
    });
    loadTodo();
    toast.success("Task completed");
  };

  return (
    <Container>
      <h1>{capitalize(todo.title)}</h1>
      <p>{capitalize(todo.description)}</p>
      <p>
        Created at:{" "}
        {new Intl.DateTimeFormat("pt-BR").format(new Date(todo.createdAt))}
      </p>

      <button type="button" onClick={() => handleCheck()}>
        <AiFillCheckCircle />
        Check Task
      </button>
    </Container>
  );
};

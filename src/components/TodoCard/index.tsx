import { Container } from "./styles";
import { TodoProps } from "../../Types/types";
import { AiFillCheckCircle } from "react-icons/ai";

interface TodoCardProps {
  todo: TodoProps;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <Container>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{new Intl.DateTimeFormat("pt-BR").format(new Date(todo.createdAt))}</p>
      {!todo.isCompleted && (
        <button>
          <AiFillCheckCircle />
          Check Task
        </button>
      )}
    </Container>
  );
};

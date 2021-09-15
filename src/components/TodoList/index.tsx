import { TodoProps } from "../../Types/types";
import { TodoCard } from "../TodoCard";
import { Container } from "./styles";

interface TodoListProps {
  listTodo: TodoProps[];
}

export const TodoList = ({ listTodo }: TodoListProps) => {
  return (
    <Container>
      {listTodo.map((t) => (
        <TodoCard key={t.id} todo={t} />
      ))}
    </Container>
  );
};

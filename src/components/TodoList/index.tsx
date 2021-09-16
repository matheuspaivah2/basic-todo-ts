import { TodoProps } from "../../Types/types";
import { TodoCard } from "../TodoCard";
import { Container } from "./styles";

interface TodoListProps {
  listTodo: TodoProps[];
  nameList: string;
}

export const TodoList = ({ listTodo, nameList }: TodoListProps) => {
  return (
    <Container>
      {listTodo[0] ? (
        listTodo.map((t) => <TodoCard key={t.id} todo={t} />)
      ) : (
        <p>
          {nameList === "Pending"
            ? "Register new tasks and organize your day"
            : "You didn't finish any tasks"}
        </p>
      )}
    </Container>
  );
};

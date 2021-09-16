import { Container } from "./styles";
import { useTodo } from "../../Hooks/TodoContext";
import { TodoList } from "../../components/TodoList";
import checkListIlustration from "../../assets/Checklist-bro.svg";
import { Menu } from "../../components/Menu";
import { useEffect, useState } from "react";
import { TodoProps } from "../../Types/types";
export const Dashboard = () => {
  const { userTodo } = useTodo();

  const [incompleteTodoList, setIncompleteTodoList] = useState<TodoProps[]>([]);

  useEffect(() => {
    const newList: TodoProps[] = userTodo.filter(
      (l) => l.isCompleted === false
    );
    setIncompleteTodoList([...newList]);
  }, [userTodo]);

  return (
    <Container>
      <header>
        <img src={checkListIlustration} alt="checklist" />
        <h1>Tasks</h1>
      </header>
      <Menu />
      {incompleteTodoList[0] ? (
        <TodoList listTodo={incompleteTodoList} />
      ) : (
        <p className="empty-tasks">
          No tasks registered! <br /> Add new tasks and organize your routine
        </p>
      )}
    </Container>
  );
};

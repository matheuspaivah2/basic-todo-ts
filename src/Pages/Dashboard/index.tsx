import { Container } from "./styles";
import { useTodo } from "../../Hooks/TodoContext";
import { TodoList } from "../../components/TodoList";
import checkListIlustration from "../../assets/Checklist-bro.svg";
import { Menu } from "../../components/Menu";
import { useEffect, useState } from "react";
import { TodoProps } from "../../Types/types";
export const Dashboard = () => {
  const { todoList } = useTodo();
  const [selectedList, setSelectedList] = useState("pending");
  const [incompleteTodoList, setIncompleteTodoList] = useState<TodoProps[]>([]);
  const [completeTodoList, setCompleteTodoList] = useState<TodoProps[]>([]);

  const handleSelectList = (nameList: string) => {
    setSelectedList(nameList);
  };

  useEffect(() => {
    const newIncompleteTodoList: TodoProps[] = todoList.filter(
      (l) => l.isCompleted === false
    );
    setIncompleteTodoList([...newIncompleteTodoList]);

    const newCompleteTodoList: TodoProps[] = todoList.filter(
      (l) => l.isCompleted === true
    );

    setCompleteTodoList([...newCompleteTodoList]);
  }, [todoList]);

  return (
    <Container>
      <header>
        <img src={checkListIlustration} alt="checklist" />
        <h1>Tasks</h1>
      </header>
      <Menu handleSelectList={handleSelectList} />
      {selectedList === "pending" ? (
        <TodoList listTodo={incompleteTodoList} nameList="Pending" />
      ) : (
        <TodoList listTodo={completeTodoList} nameList="Finished" />
      )}
    </Container>
  );
};

import { Container } from "./styles";
import { useTodo } from "../../Hooks/TodoContext";
import { TodoList } from "../../components/TodoList";
import checkListIlustration from "../../assets/Checklist-bro.svg";
import { Menu } from "../../components/Menu";
export const Dashboard = () => {
  const { userTodo } = useTodo();

  return (
    <Container>
      <header>
        <img src={checkListIlustration} alt="checklist" />
        <h1>Tasks</h1>
      </header>
      <Menu />
      {userTodo && <TodoList listTodo={userTodo} />}
    </Container>
  );
};

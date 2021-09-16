import { Container } from "./styles";
import { TodoProps } from "../../Types/types";
import { AiFillCheckCircle } from "react-icons/ai";
import { useTodo } from "../../Hooks/TodoContext";

interface TodoCardProps {
  todo: TodoProps;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  const {userTodo, setUserTodo} = useTodo()
  const capitalize = (str: string) => {
    
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  const handleCheck = () => {
    userTodo[todo.id - 1]['isCompleted'] = true;
    setUserTodo([...userTodo])
    
  }

  return (
    <Container>
      <h1>{capitalize(todo.title)}</h1>
      <p>{todo.description}</p>
      <p>{new Intl.DateTimeFormat("pt-BR").format(new Date(todo.createdAt))}</p>
      {!todo.isCompleted && (
        <button type='button' onClick={handleCheck}>
          <AiFillCheckCircle />
          Check Task
        </button>
      )}
    </Container>
  );
};

import { Container } from "./styles";
import { TodoProps } from "../../Types/types";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiRestartFill } from "react-icons/ri";
import { useState } from "react";
import { ModalConfirmAction } from "../ModalConfirmAction";

interface TodoCardProps {
  todo: TodoProps;
}

export const TodoCard = ({ todo }: TodoCardProps) => {
  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  const handleModalConfirm = () => {
    setOpenModalConfirm(!openModalConfirm);
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
  };

  const handleCorfirm = async () => {
    handleModalConfirm();
  };

  return (
    <>
      <Container isCompleted={todo.isCompleted}>
        <h1>{capitalize(todo.title)}</h1>
        <p>{capitalize(todo.description)}</p>
        <p>
          Created at:{" "}
          {new Intl.DateTimeFormat("pt-BR").format(new Date(todo.createdAt))}
        </p>

        <button type="button" onClick={() => handleCorfirm()}>
          {todo.isCompleted ? (
            <>
              <RiRestartFill /> Revert
            </>
          ) : (
            <>
              <AiFillCheckCircle /> Check Task
            </>
          )}
        </button>
      </Container>
      <ModalConfirmAction
        openModalConfirm={openModalConfirm}
        todo={todo}
        handleModalConfirm={handleModalConfirm}
      />
    </>
  );
};

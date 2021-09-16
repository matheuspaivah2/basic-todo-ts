import { Container } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { ModalNewTodo } from "../ModalNewTodo";

export const Menu = () => {
  const [openModalNewTask, setOpenModalNewTask] = useState(false);

  const handleModalNewTask = () => {
    setOpenModalNewTask(!openModalNewTask);
  };

  return (
    <>
      <Container>
        <h2>To do</h2>
        <button type="button" className="add-task" onClick={handleModalNewTask}>
          <AiFillPlusCircle />
        </button>
      </Container>

      <ModalNewTodo
        openModalNewTask={openModalNewTask}
        handleModalNewTask={handleModalNewTask}
      />
    </>
  );
};

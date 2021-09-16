import { Button } from "../Button";
import { Container } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { ModalNewTodo } from "../ModalNewTodo";

export const Menu = () => {
  const [openModalNewTask, setOpenModalNewTask] = useState(false);

  const handleModalNewTask = () => {
    setOpenModalNewTask(!openModalNewTask);
  };

  // const handleClose = () => {
  //   setOpenModalNewTask(false);
  // };
  return (
    <>
    <Container>
      <div className="content">
        <Button>Tasks</Button>
        <Button>Finished</Button>
      </div>
      <button type="button" className="add-task" onClick={handleModalNewTask}>
        <AiFillPlusCircle />
      </button>
    </Container>

    <ModalNewTodo openModalNewTask={openModalNewTask} handleModalNewTask={handleModalNewTask}/>
    </>
  );
};

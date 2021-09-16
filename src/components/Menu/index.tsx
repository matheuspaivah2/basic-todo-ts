import { Container } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { ModalNewTodo } from "../ModalNewTodo";

interface MenuProps {
  handleSelectList: (nameList: string) => void;
}

export const Menu = ({ handleSelectList }: MenuProps) => {
  const [openModalNewTask, setOpenModalNewTask] = useState(false);
  const [selectedPage, setSelectedPage] = useState("pending");

  const handleModalNewTask = () => {
    setOpenModalNewTask(!openModalNewTask);
  };

  const handleOpenPendingList = () => {
    handleSelectList("pending");
    setSelectedPage("pending");
  };
  const handleOpenCompletedList = () => {
    handleSelectList("completed");
    setSelectedPage("finished");
  };
  return (
    <>
      <Container selectedPage={selectedPage}>
        <div className="content">
          <button type="button" onClick={handleOpenPendingList}>
            Pending
          </button>
          <button
            type="button"
            className="bt-finished"
            onClick={handleOpenCompletedList}
          >
            Finished
          </button>
        </div>
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

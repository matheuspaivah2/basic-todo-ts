import { Container } from "./styles";
import Modal from "@material-ui/core/Modal";
import { useState, FormEvent } from "react";
import { useTodo } from "../../Hooks/TodoContext";
import { AiFillCloseCircle } from "react-icons/ai";

interface ModalNewTodoProps {
  openModalNewTask: boolean;
  handleModalNewTask: () => void;
}

export function ModalNewTodo({
  openModalNewTask,
  handleModalNewTask,
}: ModalNewTodoProps) {
  const { createTodo } = useTodo();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const isCompleted = false;

  const handleCreateNewTodo = async (event: FormEvent) => {
    event.preventDefault();

    if (!title && !description) {
      alert("The fields must be filled in");
      return;
    }
    await createTodo({
      title,
      description,
      isCompleted,
    });

    setDescription("");
    setTitle("");
    handleModalNewTask();
  };
  return (
    <Modal
      open={openModalNewTask}
      onClose={handleModalNewTask}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container>
        <header>
          <h1>New Task</h1>
          <button onClick={handleModalNewTask}>
            <AiFillCloseCircle />
          </button>
        </header>

        <form onSubmit={handleCreateNewTodo}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <button type="submit">Register</button>
        </form>
      </Container>
    </Modal>
  );
}

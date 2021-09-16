import { Container } from "./styles";
import Modal from "@material-ui/core/Modal";
import { useTodo } from "../../Hooks/TodoContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { TodoProps } from "../../Types/types";
import { api } from "../../services/api";
import toast from "react-hot-toast";

interface ModalNewTodoProps {
  openModalConfirm: boolean;
  handleModalConfirm: () => void;
  todo: TodoProps;
}

export function ModalConfirmAction({
  openModalConfirm,
  handleModalConfirm,
  todo,
}: ModalNewTodoProps) {
  const { todoList, loadTodo } = useTodo();

  const handleConfirmAction = async () => {
    const outputMsg = todo.isCompleted;
    todoList[todo.id - 1]["isCompleted"] =
      !todoList[todo.id - 1]["isCompleted"];
    await api.patch(`/todos/${todo.id}`, {
      ...todoList[todo.id - 1],
    });
    loadTodo();
    toast.success(!outputMsg ? "Task completed" : "Reversed task");
  };

  return (
    <Modal
      open={openModalConfirm}
      onClose={handleModalConfirm}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container>
        <header>
          <h1>Proceed</h1>
          <button onClick={handleModalConfirm}>
            <AiFillCloseCircle />
          </button>
        </header>

        <p>Do you want to proceed with the action?</p>
        <div>
          <button type="button" onClick={handleModalConfirm}>
            Cancel
          </button>
          <button type="button" onClick={handleConfirmAction}>
            Confirm
          </button>
        </div>
      </Container>
    </Modal>
  );
}

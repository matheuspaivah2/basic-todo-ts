import { Container } from "./styles"
import Modal from '@material-ui/core/Modal';
import {TextField} from '@material-ui/core'
import { useEffect, useState, FormEvent } from "react";
import { useTodo } from "../../Hooks/TodoContext";

interface ModalNewTodoProps{
    openModalNewTask: boolean;
    handleModalNewTask: () => void;
}

export function ModalNewTodo({openModalNewTask, handleModalNewTask}: ModalNewTodoProps) {

    const {createTodo} = useTodo()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const isCompleted = false;


    const handleCreateNewTodo = async (event: FormEvent) =>{
      event.preventDefault()
    await createTodo({
        title,
        description,
        isCompleted
      });

      setDescription('')
      setTitle('')
      handleModalNewTask()
    }
  return (   
      <Modal
        open={openModalNewTask}
        onClose={handleModalNewTask}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container>
           <header>
               <button onClick={handleModalNewTask}>X</button>
           </header>

           <form onSubmit={handleCreateNewTodo}>
            <TextField onChange={e => setTitle(e.target.value)} label="Title"/>
            <TextField onChange={e => setDescription(e.target.value)} label="Description"/>
            <button type='submit'>Register</button>
           </form>
        </Container>
      </Modal>
    
  );
}
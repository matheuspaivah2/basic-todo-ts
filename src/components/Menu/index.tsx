import { Button } from "../Button";
import { Container } from "./styles";
import { AiFillPlusCircle } from "react-icons/ai";

export const Menu = () => {
  return (
    <Container>
      <div className="content">
        <Button>Tasks</Button>
        <Button>Finished</Button>
      </div>
      <button type="button" className="add-task">
        <AiFillPlusCircle />
      </button>
    </Container>
  );
};

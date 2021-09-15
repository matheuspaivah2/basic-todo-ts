import { Container } from "./styles";

interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return <Container>{children}</Container>;
};

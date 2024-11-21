import Botao from "../Botao/Botao";
import Input from "../Input/Input";

export interface onSubmitProps {
  onSubmit: (data: {nome: string, email: string})  => void;
}
const Form = ({ onSubmit }: onSubmitProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target as HTMLFormElement; // Tipando o form
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    onSubmit({ nome, email });
  };

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col items-center justify-center -mt-20 gap-5 mx-5">
      <Input type="text" required name="nome" placeholder="Digite seu nome" />
      <Input type="email" required name="email" placeholder="Digite seu e-mail" />
      <Botao type="submit">Entrar</Botao>
    </form>
  );
};

export default Form;

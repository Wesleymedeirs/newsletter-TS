
interface typesProps {
    type: "submit" | "reset" | "button";
    children: string
}


const Botao = ({type, children}:typesProps) => {
  return (
    <button type={type} className="btn btnEntrar">
        {children}
    </button>
  )
}

export default Botao
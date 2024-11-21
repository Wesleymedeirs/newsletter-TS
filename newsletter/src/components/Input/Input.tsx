interface props {
  required: boolean
  type: string
  name: string
  placeholder: string
}

const Input = (props:props) => {
  return (
    <input {...props} className="campo-input"/>
  )
}

export default Input
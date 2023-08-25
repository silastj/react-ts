import React from 'react'
import Button from "./components/Button"
import Input from "./components/Input"
import Checkbox from './components/Checkbox'

type ButtonProps = {
  nome?: string
  setNome: React.Dispatch<React.SetStateAction<string>>
}

function App({}: ButtonProps) {
  const handleClick = () => {
    alert('Silas')
  }


  const [nome, setNome] = React.useState('')
  return (
    <div>
      <h1>Hello</h1>
      <Button
        id="btnPrincipal"
        tamanho="30"
        onClick={handleClick}
      >Clicar
      </Button>
      <Input
        label="nome"
        id="nome"
        type="text"
        value={nome}
        onChange={(event) => {setNome(event.currentTarget.value)}}
      />
      <Input
        label="email"
        id="email"
        type="email"
      />
      <Input
        label="idade"
        id="idade"
        type="number"
      />
      <Input
        label="data"
        id="data"
        type="date"
      />
      <Input
        label="hora"
        id="hora"
        type="time"
      />

    <p>Nome: {nome}</p>
    <footer>
      <hr />
      <Checkbox
        label="Digite seu nome"
      />
    </footer>
    </div>
  )
}

export default App

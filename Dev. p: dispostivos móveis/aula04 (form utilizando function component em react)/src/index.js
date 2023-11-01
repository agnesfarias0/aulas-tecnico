import React, { useState }from 'react';
import ReactDOM from 'react-dom/client';

function Form2(props){

  const[nome, setNome] = useState('Gustavo');
  const[cor, setCor] = useState('branco')

  return (<form onSubmit = {(event) => {
    alert(`O usuário de nome ${this.state.nome} escolheu a cor ${this.state.cor}`)
    event.preventDefault()
  }} >

    <input name="nome" type="text" onChange={(event) => setNome(event.target.value)} value={nome}></input>
    <select name="cor" value={cor} onChange={(event) => setCor(event.target.value)}>
      <option value="laranja">Laranja</option>
      <option value="branco">Branco</option>
      <option value="verde">Verde</option>
      <option value="amarelo">Amarelo</option>
    </select>

    <input type="submit"value="Enviar!"></input>
   </form>)
}

ReactDOM.render(
  <Form2 />,
  document.getElementById('root')
);
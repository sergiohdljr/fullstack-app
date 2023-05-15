import axios from "axios"
import { useEffect, useState } from "react"
import './App.css'

interface Iuser{
  nome: string,
  email: string,
  age:number,
  gender: "masculino"| "feminino",
  cpf: string,
  telephone: string
}

function App() {

  const [usuarios,setUsuarios] = useState<Iuser[]>()

  useEffect(()=>{
   axios.get('http://localhost:3000/').then((resposta)=> setUsuarios(resposta.data))
  },[])

  return (
      <div style={{width:'100%'}}>
       <table>
  <caption>Usuarios Cadastrados</caption>
  <thead>
    <tr>
      <th scope="col">nome</th>
      <th scope="col">email</th>
      <th scope="col">genero</th>
      <th scope="col">idade</th>
      <th scope="col">cpf</th>
      <th scope="col">telefone</th>
    </tr>
  </thead>
  <tbody>
   {usuarios ? usuarios.map((user)=>{
    return(
    <tr key={user.age*2}>
      <td data-label="Usuário">{user.nome}</td>
      <td data-label="Email">{user.email}</td>
      <td data-label="Genêro">{user.gender}</td>
      <td data-label="Idade">{user.age}</td>
      <td data-label="CPF">{user.cpf}</td>
      <td data-label="Telefone">{user.telephone}</td>
    </tr>
    )
   }): <p>Nenhum Usuário Cadastrado</p>}
  </tbody>
</table>
      </div>
  )
}

export default App

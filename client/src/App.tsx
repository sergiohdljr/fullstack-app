import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form"

interface Iuser{
  nome: string,
  email: string,
  idade:number,
  genero:"feminino" | "masculino",
  cpf: string,
  telefone: string
}

function App() {

  const { register,handleSubmit} = useForm<Iuser>()

  const handleUserRegister: SubmitHandler<Iuser> =  (usuario) => {
    axios.get('http://localhost:3000/').then((res)=>console.log(res.data))
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleUserRegister)}>
          <label htmlFor="nome">
            <span>Nome: </span>
            <input {...register("nome")} type="text" />
          </label>
          <label htmlFor="email">
            <span>Email: </span>
            <input {...register("email")} type="email" />
          </label>
          <label htmlFor="idade">
            <span>Idade: </span>
            <input {...register("idade")} type="number"/>
          </label>
          <select {...register("genero")}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <label htmlFor="cpf">
            <span>Cpf: </span>
            <input {...register("cpf")} type="text"/>
          </label>
          <label htmlFor="telefone">
            <span>Telefone: </span>
            <input {...register("telefone")} type="text"/>
          </label>
        </form>
        <button type="submit">Cadastrar Usuário</button>
        
      </div>
    </>
  )
}

export default App

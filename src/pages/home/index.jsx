import './style.css'
import Trash from '../../assets/icons8-lixeira-50.png'

function Home() {

  const users = [
    {
      id: 'asdas13231as',
      name: 'Lucas',
      email: 'lucas@gmail.com',
      age: 20
    },
    {
      id: 'asdas1323109',
      name: 'João',
      email:'joao@gmail.com',
      age: 25
    }]

  

  return (
   
    <div className='container'>
        <form action="">
          <h1>Cadastro Usuario</h1>
          <input type="text" name="name" id="" placeholder='Entre com seu nome:'/>
          <input type="text" name="email" id="" placeholder='Entre com seu email:'/>
          <input type="number" name="age" id=""/>
          <button type="button">Cadastra</button>
        </form>

        {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Age: <span>{user.age}</span></p>
          </div>
          
          <button>
            <img src={Trash} alt="Trash" />
          </button>
        </div>

      ))}
      </div>
    
  )
}

export default Home

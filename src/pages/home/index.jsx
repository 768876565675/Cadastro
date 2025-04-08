import './style.css'

function Home() {
  

  return (
   
      <div>
        <form action="">
          <h1>Cadastro Usuario</h1>
          <input type="text" name="name" id="" placeholder='Entre com seu nome:'/>
          <input type="text" name="email" id="" placeholder='Entre com seu email:'/>
          <input type="number" name="age" id=""/>
          <button type="button">Cadastra</button>
        </form>
        <div>
          <div>
            <p>Nome</p>
            <p>Email</p>
            <p>Age</p>
          </div>
          <button>Trash</button>

        </div>
      </div>
    
  )
}

export default Home

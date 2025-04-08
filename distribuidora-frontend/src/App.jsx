import { useState } from 'react'


function App() {
  const nombre= <h1>Facundo</h1>
  const apellido= <h2>Cordoba</h2>
  const edad= <h3>27 años</h3>
  const correo= <h4>facundocordoba@gmail.com</h4>
  const presentacion=<div>{nombre}{apellido}{edad}{correo}</div>
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        {presentacion}
      </div>
      <p className="read-the-docs">
        Parrafo debajo del titulo 
      </p>
    </>
  )
}

export default App

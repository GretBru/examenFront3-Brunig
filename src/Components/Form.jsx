import { useState } from "react";

const Form = () => {
  
  const [user, setUser] = useState({
    name: "",
    email: ""
  })

  const [confirm, setConfirm] = useState(false)
  const [error, setError] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    
    if (user.name.length < 4 || !emailRegex.test(user.email)) {
      setError(true)
      setConfirm(false)
    } else {
      setError(false)
      setConfirm(true)
    }
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={(e) => {setUser({ ...user, name: e.target.value });}} id="username" placeholder="Nombre"/>
        <input type="email" onChange={(e) => {setUser({ ...user, email: e.target.value });}} id="useremail" placeholder="Correo Electrónico" />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">Verifique los datos ingresados</p>}
      {confirm && <p className="confirm">Gracias, {user.name}! nos contactaremos a la brevedad.</p>}
    </div>
  );
};

export default Form;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", lasName: "" });

  const functionForm = (evento) => {
    evento.preventDefault();

    navigate("/");
  };

  const functionImput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={functionForm}>
        <input
          type="text"
          placeholder="Ingresar Nombre"
          name="name"
          onChange={functionImput}
        />
        <input
          type="text"
          placeholder="Ingresar Apellido"
          name="lastName"
          onChange={functionImput}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;

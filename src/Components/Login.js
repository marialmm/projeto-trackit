import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./../assets/midias/Logo.png";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  function sendInputData(e) {
    e.preventDefault();
    const promise = axios.post(URL, user);
    promise.then((data) => {
      console.log(data);
    });
    promise.catch((err) => {
      window.alert("Email ou senha incorretos");
      console.log(err.response.status)
    });
  }

  return (
    <Div>
      <img src={logo} alt="Logo" />
      <form onSubmit={(e) => sendInputData(e)}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se</p>
      </Link>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 180px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input,
  button {
    width: 303px;
    height: 45px;
  }

  input {
    margin-bottom: 6px;
    padding: 10px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  input::placeholder {
    color: #dbdbdb;
    font-size: 20px;
  }

  button {
    background-color: var(--light-blue);
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-size: 21px;
    margin-bottom: 26px;
  }

  p {
    color: var(--light-blue);
    font-size: 14px;
    line-height: 17px;
    text-decoration-color: var(--light-blue);
  }

  a:visited {
    text-decoration-color: var(--light-blue);
  }
`;

export default Login;

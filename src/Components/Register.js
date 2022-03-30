import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import logo from "./../assets/midias/Logo.png";

function Register() {
  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  function sendUserRegister(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(URL, userRegister);
    promise.then(() => {
        navigate("/");
    });
    promise.catch((err) => {
        console.log(`${err.response.status} - ${err.response.statusText}`);
        window.alert('Erro no cadastro');
        setLoading(false);
    })
  }

  return (
    <Div>
      <img src={logo} alt="Logo" />
      <form onSubmit={(e) => sendUserRegister(e)}>
        <input
          disabled={loading}
          type="email"
          placeholder="email"
          onChange={(e) =>
            setUserRegister({ ...userRegister, email: e.target.value })
          }
          value={userRegister.email}
          required
        />
        <input
          disabled={loading}
          type="password"
          placeholder="senha"
          onChange={(e) =>
            setUserRegister({ ...userRegister, password: e.target.value })
          }
          value={userRegister.password}
          required
        />
        <input
          disabled={loading}
          type="text"
          placeholder="nome"
          onChange={(e) =>
            setUserRegister({ ...userRegister, name: e.target.value })
          }
          value={userRegister.name}
          required
        />
        <input
          disabled={loading}
          type="url"
          placeholder="foto"
          onChange={(e) =>
            setUserRegister({ ...userRegister, image: e.target.value })
          }
          value={userRegister.image}
          required
        />
        <button disabled={loading} type="submit">
          {!loading ? "Cadastrar" : <ThreeDots color="#FFFFFF" />}
        </button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login</p>
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

  button {
    background-color: var(--light-blue);
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-size: 21px;
    margin-bottom: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
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

export default Register;

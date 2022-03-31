import axios from "axios";
import styled from "styled-components";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "./../assets/contexts/UserContext";
import logo from "./../assets/midias/Logo.png";


function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const {setVisibility} = useContext(UserContext);
  setVisibility(false);
  const navigate = useNavigate();

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  function sendInputData(e) {
    e.preventDefault();
      setLoading(true);
      const promise = axios.post(URL, user);
      promise.then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("image", response.data.image);
        navigate("/hoje")

      });
      promise.catch((err) => {
        alert("Email ou senha incorretos");
        console.log(`${err.response.status} - ${err.response.statusText}`);
        setLoading(false);
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
          disabled={loading}
          required
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
          disabled={loading}
          required
        />
        <button disabled={loading} type="submit">
          {!loading ? "Entrar" : <ThreeDots color="#FFFFFF" width={60} />}
        </button>
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

export default Login;

import axios from "axios";
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "./../assets/contexts/UserContext";
import logo from "./../assets/midias/Logo.png";

function Login() {
  const { setVisibility, user, setUser, requestError } = useContext(UserContext);
  const [login, setLogin] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  setVisibility(false);

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

  useEffect(() => {
    if (Object.keys(login).length !== 0 && login.connected === true) {
      localStorage.setItem("user", JSON.stringify(login));
    }
  }, [login]);

  useEffect(() => {
    autoLogin();
  }, []);

  function autoLogin() {
    const USER = JSON.parse(localStorage.getItem("user"));
    if (USER !== null && USER.connected === true) {
      const userData = {
        email: USER.email,
        password: USER.password,
        connected: USER.connected,
      };
      requestLogin(userData);
    }
  }

  function requestLogin({ email, password, connected }) {
    setLoading(true);
    const loginData = {
      email,
      password,
    };
    const promise = axios.post(URL, loginData);
    promise.then((response) => {
      setLogin({ ...response.data, connected });
      setUser({ ...response.data });
      navigate("/hoje");
    });
    promise.catch((err) => {
      requestError(err, navigate)
    });
  }

  function sendInputData(e) {
    e.preventDefault();
    requestLogin(user);
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
        <div>
          <input
            type="checkbox"
            id="keepConnected"
            value={user.connected}
            name="connected"
            onChange={(e) => setUser({ ...user, connected: !user.connected })}
            disabled={loading}
          />
          <label htmlFor="keepConnected">Mantenha-me conectado</label>
        </div>
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

  form > div {
    display: flex;
    align-items: center;
    width: 100%;
  }

  #keepConnected {
    width: 18px;
    margin-right: 15px;
  }

  form label {
    font-family: "Lexend Deca", sans-serif;
    color: var(--gray);
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

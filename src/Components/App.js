import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import Header from "./Header";
import Menu from "./Menu";
import GlobalStyle from "./../assets/globalStyle/globalStyle";
import UserContext from "./../assets/contexts/UserContext";

function App() {
  const [visibility, setVisibility] = useState(false);
  const weekdays = [
    {
      id: 0,
      name: "D",
    },
    {
      id: 1,
      name: "S",
    },
    {
      id: 2,
      name: "T",
    },
    {
      id: 3,
      name: "Q",
    },
    {
      id: 4,
      name: "Q",
    },
    {
      id: 5,
      name: "S",
    },
    {
      id: 6,
      name: "S",
    },
  ];
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState({
    email: "",
    password: "",
    connected: false,
  });

  function requestError(err, navigate){
    console.log(`${err.response.status} - ${err.response.statusText}`);
    alert("Um erro aconteceu, tente novamente");
    navigate("/");
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{ visibility, setVisibility, weekdays, progress, setProgress, user, setUser, requestError }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
          </Routes>
          <Menu />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

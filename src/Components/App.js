import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";

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

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ visibility, setVisibility }}>
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

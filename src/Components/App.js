import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import Header from "./Header";
import Menu from "./Menu";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App(){
    return(
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
    )
}

export default App;
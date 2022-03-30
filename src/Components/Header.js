import {useContext} from "react";

import UserContext from "./../assets/contexts/UserContext";

function Header(){
    const {visibility} = useContext(UserContext);
    
    return(
        visibility ?
        <h1>Topo</h1> :
        <></>
    )
}

export default Header;
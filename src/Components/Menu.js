import {useContext} from "react";

import UserContext from "./../assets/contexts/UserContext"

function Menu(){
    const {visibility} = useContext(UserContext);

    return(
        visibility ? 
        <h1>Menu</h1> : 
        <></>
    )
}

export default Menu;
import React, {useState} from "react";
import useToggle from "./hooks/useToggle";

function Toggler(){
    
   const [isHappy, toggleIsHappy] = useToggle(true)
   const [isHeartBroken, toggleIsHeartBroken] = useToggle(false)
   const [isBanana, toggleIsBanana] = useToggle(false)

    return(
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? "happy" : "sad" }</h1>        
            <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? "heart" : "broken heart" }</h1>
            <h1 onClick={toggleIsBanana}>{isBanana ? "banana" : "not banana" }</h1>
        </div>

    )
}

export default Toggler;
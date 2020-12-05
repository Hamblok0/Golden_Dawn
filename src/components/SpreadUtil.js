import React from "react";
import saveSvg from "../img/save.svg";
import shuffleSvg from "../img/shuffle.svg";


const SpreadUtil = (props) => {
    return (
        <div className="spreadUtil">
           <img src={shuffleSvg}/>
           <img src={saveSvg}/>
        </div>
    )
}

export default SpreadUtil;
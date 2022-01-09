import React from "react";
import spinner from '../../img/Rocket.gif';

export default function Spinner(){
    return(
        <img src={spinner}
             style={{width: '100px', margin: 'auto', display: 'flex'}}
             alt="Loading..."/>
    )
}
import React from "react";
import { ContactProps } from "../types/componentsTypes";

export default function DisplayContact (props:ContactProps){

    return(
        <div>
            <h1>Name: {props.contactInfo.userName}</h1>
            <h1>Email: {props.contactInfo.userEmail}</h1>
            <h1>Msg: {props.contactInfo.userMsg}</h1>
        </div>
    )
}
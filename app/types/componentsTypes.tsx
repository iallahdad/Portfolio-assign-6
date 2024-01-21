import { type } from "os"
import { ReactNode } from "react"

export type ContactProps={
    contactInfo:{
    userName:string,
    userEmail:string,
    userMsg:string,
    name:string,
    width:number,
    height:number,
}
    
   // onClickHandler:()=> void
}

export type onEventType ={

    target: {value:string}
}


import React from 'react'
import MoveXAnimate from './animation/MoveXAnimate'



export const getAnimateComponent = (key) => {
    switch(key){
        case "MOVEX-ani":{
        //    console.log("i am called" + key)
            return <MoveXAnimate/>;}
    }
}



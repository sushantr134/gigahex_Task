import React from 'react'

export const Card = (props) => {
    return (
        <div className="Accomodation__card" id={props.isActive ? "active" : null}  onClick={()=>props.SelectChoice(`${props.choiceID}`)}>
        <img src={props.Logo} alt={props.choiceName} />
        <label>{props.choiceName}</label>
    </div> 
    )
}
import React from 'react'

import {Card} from './cards/cards'


export const AccomodationList = (props) => {
   console.log(props.propsFromRedux)
   console.log(props.selectChoicesFromRedux)
    return (
        <div className="AccomodationLists">
        <div className="container">
            
            <Card Logo={props.appartLogo} SelectChoice={props.selectChoicesFromRedux} choiceName={"Appartment"} choiceID={'A'} isActive={props.propsFromRedux.selectedChoice && (props.propsFromRedux.selectedChoice === 'A' ? true : false)}/>
            <Card Logo={props.villaLogo} SelectChoice={props.selectChoicesFromRedux}  choiceName={"Villa"} choiceID={'B'} isActive={props.propsFromRedux.selectedChoice && (props.propsFromRedux.selectedChoice === 'B' ? true : false)} />
           
        </div>
        </div>
    )
}


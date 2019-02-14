import React from 'react'

import {Card} from './cards/cards'
import {connect} from 'react-redux'
import {activeChoice} from '../../../redux/actions/Lists/selectChoiceAction'

const AccomodationList = (props) => {

    return (
        <div className="AccomodationLists">
        <div className="container">
            
            <Card Logo={props.appartLogo} SelectChoice={props.onSelectChoices} choiceName={"Appartment"} choiceID={'A'} isActive={props.ChoicesState.selectedChoice === 'A' ? true : false} />
            <Card Logo={props.villaLogo} SelectChoice={props.onSelectChoices}  choiceName={"Villa"} choiceID={'B'} isActive={props.ChoicesState.selectedChoice === 'B' ? true : false} />
           
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ChoicesState : state.choiceStore
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectChoices : (typeOfChoice) => dispatch(activeChoice(typeOfChoice))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccomodationList)
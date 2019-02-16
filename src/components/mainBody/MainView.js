import React from 'react'
import {ButtonView} from './Buttons/Buttons'
import {AccomodationList} from './AccomodationList'

import appartLogo from '../../../appartment.svg'
import villaLogo from '../../../house.svg'


import {connect} from 'react-redux'
import {activeChoice} from '../../../redux/actions/Lists/selectChoiceAction'

const MainView = (props) => {

    return (
                <div className="mainView">
                <h1>{props.heading}</h1>
                <AccomodationList appartLogo={appartLogo}  villaLogo={villaLogo} propsFromRedux={props.ChoicesState} selectChoicesFromRedux={props.onSelectChoices} />
                <ButtonView onClickFun={()=>alert("hello")} isActiveButton={props.ChoicesState.buttonActive === null ? true : false}  />                
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
export default connect(mapStateToProps,mapDispatchToProps)(MainView)
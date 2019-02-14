import React from 'react'
import {ButtonView} from './Buttons/Buttons'
import AccomodationList from './AccomodationList'

import appartLogo from '../../../appartment.svg'
import villaLogo from '../../../house.svg'

export const MainView = (props) => {

    return (
                <div className="mainView">
                <h1>{props.heading}</h1>
                <AccomodationList appartLogo={appartLogo} villaLogo={villaLogo} />
                <ButtonView />                
                </div>
    )
}



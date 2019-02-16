import React from 'react'

import './style.scss'; 

export const SideBar = (props) => {
    return (<aside>
        <nav>
            <ul>
                <li className="sideText"><img src={props.logo} alt="logo" />{props.name}</li>
            </ul>
        </nav>
    </aside>
    )
}

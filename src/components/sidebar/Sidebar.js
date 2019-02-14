import React from 'react'

export const SideBar = (props) => {
    return (<aside>
        <nav>
            <ul>
                <li><img src={props.logo} alt="logo" />&nbsp;&nbsp;{props.name}</li>
            </ul>
        </nav>
    </aside>
    )
}
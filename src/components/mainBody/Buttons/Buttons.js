import React from 'react'


export const ButtonView = (props) => (
    <div className="buttons">
    <button className="btn" onClick={props.onClickFun} disabled={props.isActiveButton ? true : false} >Cancel</button>
    <button className="btn active" disabled={props.isActiveButton ? true : false}>Next</button>
    </div>
)

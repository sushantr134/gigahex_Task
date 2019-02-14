import {ACTIVE_SELECT_CHOICE} from '../AllActions'

export const activeChoice = (choiceType) => {
    return (dispatch) => {
            dispatch({
                type:ACTIVE_SELECT_CHOICE,
                payload:choiceType
            })
    }
}

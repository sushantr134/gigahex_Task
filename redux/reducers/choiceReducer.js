import {ACTIVE_SELECT_CHOICE} from '../actions/AllActions'

const initialState = {
    listItems:{}
}

const makeChoiceActive = (state = initialState,action) => {
    
    switch(action.type)
    {
        case ACTIVE_SELECT_CHOICE : 
                      return {
                          ...state,
                         selectedChoice:action.payload
                      }
        default : 
                  return state;             
                               
    }
}


export default makeChoiceActive;
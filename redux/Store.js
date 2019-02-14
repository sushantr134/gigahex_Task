import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import makeChoiceActive from './reducers/choiceReducer'

const allReducers = combineReducers({
     choiceStore : makeChoiceActive
})

const Store = () => createStore(allReducers,applyMiddleware(thunk,logger))

export default Store;

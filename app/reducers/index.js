import {combineReducers} from 'redux'
import listItemsReducer from './listItemsReducer'

const appReducer = combineReducers({
  listItemsReducer
})

export default appReducer
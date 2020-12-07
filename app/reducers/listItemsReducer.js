import * as CONSTANTS from '../constants'


export default function(state = [], {type, payload}) {
  switch (type) {
    case CONSTANTS.ADD_OR_REMOVE_CARD:
      return state.map(item => ({...item, selected: item.id === payload.id ? !item.selected : item.selected }))
      

    // case CONSTANTS.DELETE_CARD_ITEM:
    //   return state.filter(item => item !== payload)
    
    case CONSTANTS.FETCH_ITEM:
      return payload

    default:
      return state
  }

}
import * as CONSTANTS from '../constants'


export default function(state = [], {type, payload}) {
  switch (type) {

    case CONSTANTS.ADD_TO_CARD:
      return [...state, payload]

    case CONSTANTS.DELETE_CARD_ITEM:
      return state.filter(item => item !== payload)

    default:
      return state
  }

}
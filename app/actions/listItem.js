import * as CONSTANTS from '../constants'
export function fetchListItems(data){
    return {
        type: CONSTANTS.FETCH_ITEM,
        payload:  data
    }
}


export function addOrRemoveCard(data){
    return {
        type: CONSTANTS.ADD_OR_REMOVE_CARD,
        payload: data
    }
}
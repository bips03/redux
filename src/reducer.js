import * as actions from './actionTypes'
let initialState = []
let lastId = 0

 const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.ADD :
        return [ ...state, { id : ++lastId, name : payload.name } ]
    
    case actions.SUB : 
        return state.filter((i) => {
            return payload.id!==i.id
        })
    

    default:
        return state
    }
}

export default Reducer
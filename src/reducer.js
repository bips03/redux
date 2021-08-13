let initialState = 0
let lastId = 0

 const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case "add":
        // return [ ...state, { id : ++lastId, name : payload.name } ]
        return state + 1;
    
    case "subtract" : 
        // return state.filter((i) => {
        //     return payload.id!==i.id
        // })
        return state-1;

    default:
        return state
    }
}

export default Reducer
let initialState = []
let lastId = 0

 const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case "add":
        return [ ...state, { id : ++lastId, name : payload.name } ]
    
    case "subtract" : 
        return state.filter((i) => {
            return payload.id!==i.id
        })
    

    default:
        return state
    }
}

export default Reducer
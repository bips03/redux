import * as actions from './actionTypes'

export const add = (name) => {
    return ({
        type : actions.ADD,
        payload : {
            name : name
        }
    })
}

export const sub = (id) => {
    return ({
        type : actions.SUB,
        payload : {
            id : id
        }
    })
}

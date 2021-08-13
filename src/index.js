import store from './store'
console.log(store)
document.getElementById('app').innerHTML = `<h1> ${store.getState()} </h1>`
store.subscribe(() => {
    document.getElementById('app').innerHTML = `<h1> ${store.getState()} </h1>`
})

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
addBtn.addEventListener('click', () => {
    store.dispatch({
        type : "add"
    })
})
subBtn.addEventListener('click', () => {
    store.dispatch({
        type : "subtract"
    })
})
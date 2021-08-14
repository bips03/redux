import store from "./store";
import { add, sub } from './actions'

const unsubscribe = store.subscribe(() => {
  let res = "<li>";
  const state = store.getState();
  state.forEach((element) => {
    if (element != null) res += `<ul> ${element.name} </ul>`;
  });
  res += "</li>";
  console.log(res)
  document.getElementById("app").innerHTML = res;
  console.log(store.getState());
});

store.dispatch(add('item1'));

store.dispatch(add('item2'));

store.dispatch(sub(2))

  unsubscribe()
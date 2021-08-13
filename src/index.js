import store from "./store";
console.log(store);

const unsubscribe = store.subscribe(() => {
  let res = "<li>";
  const state = store.getState();
  state.forEach((element) => {
    if (element != null) res += `<ul> ${element.name} </ul>`;
  });
  res += "</li>";
  console.log(res)
  document.getElementById("app").innerHTML = res;
});

store.dispatch({
  type: "add",
  payload: {
    name: "item 1",
  },
});

store.dispatch({
    type: "add",
    payload: {
      name: "item 2",
    },
  });

  unsubscribe()
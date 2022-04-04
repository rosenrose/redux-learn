// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import { createStore } from "redux";

const [minus, plus] = document.querySelectorAll("button");
const number = document.querySelector("span");
const ADD = "add";
const SUB = "subtract";

const store = createStore((state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUB:
      return state - 1;
    default:
      return state;
  }
});
store.subscribe(() => {
  number.textContent = store.getState();
});

store.dispatch({ type: "" });
plus.addEventListener("click", () => {
  store.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  store.dispatch({ type: SUB });
});

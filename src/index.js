// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { createStore } from "redux";

// Counter

const [minus, plus] = document.querySelectorAll("button");
const number = document.querySelector("span");
const ADD = "add";
const SUB = "subtract";

const countStore = createStore((state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUB:
      return state - 1;
    default:
      return state;
  }
});
countStore.subscribe(() => {
  number.textContent = countStore.getState();
});

countStore.dispatch({ type: "" });
plus.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: SUB });
});

// To do

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const todoStore = createStore((state = [], action) => {
  const { type, text, id } = action;

  switch (type) {
    case ADD:
      return [{ text, id }, ...state];
    case SUB:
      return state.filter((todo) => todo.id !== id);
    default:
      return state;
  }
});
const addTodo = (text) => {
  return { type: ADD, text, id: Date.now() };
};
const deleteTodo = (id) => {
  return { type: SUB, id };
};

const createTodo = (todo) => {
  const template = document.querySelector("#todoTemplate").content.cloneNode(true);
  const li = template.firstElementChild;
  li.id = todo.id;

  template.querySelector("span").textContent = todo.text;
  template.querySelector("button").addEventListener("click", (event) => {
    todoStore.dispatch(deleteTodo(todo.id));
  });
  ul.append(li);
};

todoStore.subscribe(() => {
  ul.replaceChildren();
  // console.log(todoStore.getState());
  todoStore.getState().forEach((todo) => {
    createTodo(todo);
  });
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  todoStore.dispatch(addTodo(input.value));
  input.value = "";
});

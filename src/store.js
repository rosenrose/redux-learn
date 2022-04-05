import { createStore } from "redux";

const ADD = "add";
const DEL = "delete";
const TODOS_KEY = "todos";

const addTodo = (text) => {
  return { type: ADD, text, id: Date.now() };
};
const deleteTodo = (id) => {
  return { type: DEL, id };
};
export const actionCreators = {
  addTodo,
  deleteTodo,
};

const store = createStore((state = JSON.parse(localStorage.getItem(TODOS_KEY)), action) => {
  const { type, text, id } = action;
  let newTodo;

  switch (type) {
    case ADD:
      newTodo = [{ text, id }, ...state];
      localStorage.setItem(TODOS_KEY, JSON.stringify(newTodo));
      return newTodo;
    case DEL:
      newTodo = state.filter((todo) => todo.id !== id);
      localStorage.setItem(TODOS_KEY, JSON.stringify(newTodo));
      return newTodo;
    default:
      return state;
  }
});

export default store;

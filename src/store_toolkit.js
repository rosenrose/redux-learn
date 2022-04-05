import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

const TODOS_KEY = "todos";
const initialState = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];

// const addTodo = createAction("add");
// const deleteTodo = createAction("delete");

// const reducer = createReducer(initialState, {
//   [addTodo]: (state, action) => {
//     // mutate
//     state.unshift({ text: action.payload, id: Date.now() });
//     localStorage.setItem(TODOS_KEY, JSON.stringify(state));
//   },
//   [deleteTodo]: (state, action) => {
//     const newState = state.filter((todo) => todo.id !== action.payload);
//     localStorage.setItem(TODOS_KEY, JSON.stringify(newState));
//     return newState;
//     // filter는 mutation이 아니라서 새로운 state를 리턴
//   },
// });

const todo = createSlice({
  name: "todoManager",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // mutate
      state.unshift({ text: action.payload, id: Date.now() });
      localStorage.setItem(TODOS_KEY, JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem(TODOS_KEY, JSON.stringify(newState));
      return newState;
    },
  },
});

const store = configureStore({ reducer: todo.reducer });

// export const actionCreators = {
//   addTodo,
//   deleteTodo,
// };
export const { addTodo: addTodo_toolkit, deleteTodo: deleteTodo_toolkit } = todo.actions;

export default store;

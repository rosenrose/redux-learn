import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../components/Todo";

const Home = ({ todos, addTodo }) => {
  // console.log(todos, dispatch);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // addTodo(todo);
    dispatch(actionCreators.addTodo(todo));
    setTodo("");
  };

  const todosWithHook = useSelector((state) => state);

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={todo} placeholder="Write to do" required onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todosWithHook.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  // console.log(state);
  return { todos: state };
}
function mapDispatchToProps(dispatch, ownProps) {
  // console.log(dispatch, ownProps);
  return {
    addTodo: (text) => {
      dispatch(actionCreators.addTodo(text));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

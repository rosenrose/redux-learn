import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import { deleteTodo_toolkit } from "../store_toolkit";

const Todo = ({ text, id, deleteTodo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/${id}`}>
        <span>{text}</span>
      </Link>
      {/* <button onClick={deleteTodo}>Delete</button> */}
      <button
        onClick={() => {
          // dispatch(actionCreators.deleteTodo(id));
          dispatch(deleteTodo_toolkit(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

function mapDispatchToProps(dispatch, { id }) {
  // console.log(ownProps);
  return {
    deleteTodo: () => {
      dispatch(actionCreators.deleteTodo(id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Todo);

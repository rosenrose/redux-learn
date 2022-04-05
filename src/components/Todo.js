import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

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
          dispatch(actionCreators.deleteTodo(id));
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

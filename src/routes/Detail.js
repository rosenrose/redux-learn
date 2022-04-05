import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  // console.log(id);
  const todos = useSelector((state) => state);
  const todo = todos.find((todo) => todo.id === parseInt(id));
  const date = new Date(todo?.id);

  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>
        {!isNaN(date) &&
          `Created At: ${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}. - ${date.getHours()} : ${date
            .getMinutes()
            .toString()
            .padStart(2, "0")} : ${date.getSeconds().toString().padStart(2, "0")}`}
      </h5>
    </>
  );
};
export default Detail;

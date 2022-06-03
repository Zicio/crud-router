import AuthorInfo from "../AuthorInfo/AuthorInfo";
import { NavLink } from "react-router-dom";

const DetailedPost = (props) => {
  const { data, onClickEdit, onClickDelete } = props;

  return (
    <div className="post-detailed">
      <AuthorInfo data={data} date />
      <div className="content">{data.content}</div>
      <div className="buttons-panel">
        <button className="change" type="submit" onClick={onClickEdit}>
          Изменить
        </button>
        <button className="delete" type="submit" onClick={onClickDelete}>
          Удалить
        </button>
        <NavLink to="/crud-router/">
          <button className="return" type="submit">
            Назад к списку
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default DetailedPost;

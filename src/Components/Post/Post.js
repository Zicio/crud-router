import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

const Post = (props) => {
  const { data } = props;
  // let navigate = useNavigate();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   navigate(`/crud-router/posts/${data.id}`);
  // };

  return (
    <li className="post">
      <Link to={`/crud-router/posts/${data.id}`}>
        <div className="author-info">
          <img className="photo" src={data.photo} alt="Фото" />
          <span className="name">{data.author}</span>
          <span className="date">{moment(data.created, "x").fromNow()}</span>
        </div>
        <div className="content">{data.content}</div>
      </Link>
    </li>
  );
};

export default Post;

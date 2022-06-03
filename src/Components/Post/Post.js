import { Link } from "react-router-dom";
import AuthorInfo from "../AuthorInfo/AuthorInfo";

import "./Post.scss";

const Post = (props) => {
  const { data } = props;

  return (
    <li className="post">
      {/* Ссылка на открытие страницы детального просмотра поста */}
      <Link to={`/crud-router/posts/${data.id}`}>
        <AuthorInfo data={data} date />
        <p className="content">{data.content}</p>
      </Link>
    </li>
  );
};

export default Post;

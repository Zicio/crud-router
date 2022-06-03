import { Link } from "react-router-dom";
import AuthorInfo from "../AuthorInfo/AuthorInfo";

const Post = (props) => {
  const { data } = props;

  return (
    <li className="post">
      {/* Ссылка на открытие страницы детального просмотра поста */}
      <Link to={`/crud-router/posts/${data.id}`}>
        <AuthorInfo data={data} date />
        <div className="content">{data.content}</div>
      </Link>
    </li>
  );
};

export default Post;

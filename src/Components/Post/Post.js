import moment from "moment";

const Post = (props) => {
  const { data } = props;
  return (
    <div className="post">
      <div className="author-info">
        <img className="photo" src={data.photo} alt="Фото" />
        <span className="name">{data.author}</span>
        <span className="date">{moment(data.created, "x").fromNow()}</span>
      </div>
      <div className="content">{data.content}</div>
    </div>
  );
};

export default Post;

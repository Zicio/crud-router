import AuthorInfo from "../AuthorInfo/AuthorInfo";

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
      </div>
    </div>
  );
};

export default DetailedPost;

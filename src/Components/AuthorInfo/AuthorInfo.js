import moment from "moment";

const AuthorInfo = (props) => {
  const { data, date } = props;
  return (
    <div className="author-info">
      <img className="photo" src={data.photo} alt="Фото" />
      <span className="name">{data.author}</span>
      {date && (
        <span className="date">{moment(data.created, "x").fromNow()}</span>
      )}
    </div>
  );
};

export default AuthorInfo;

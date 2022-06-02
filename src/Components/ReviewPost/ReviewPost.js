import { useParams } from "react-router-dom";
import useGetFetchApi from "../../Hooks/useGetFetchApi";
import moment from "moment";

const ReviewPost = () => {
  const { id } = useParams();

  const { data, loading } = useGetFetchApi(`posts/${id}`);

  if (loading) {
    return <progress></progress>;
  }
  return (
    <div className="post-details">
      <div className="author-info">
        <img className="photo" src={data.photo} alt="Фото" />
        <span className="name">{data.author}</span>
        <span className="date">{moment(data.created, "x").fromNow()}</span>
      </div>
      <div className="content">{data.content}</div>
    </div>
  );
};

export default ReviewPost;

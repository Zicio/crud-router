import { useParams } from "react-router-dom";
import useGetFetchApi from "../../Hooks/useGetFetchApi";
import fetchApi from "../../fetchApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DetailedPost from "../DetailedPost/DetailedPost";
import NewPost from "../NewPost/NewPost";

const ReviewPost = () => {
  const { id } = useParams();

  let navigate = useNavigate();

  const { data, loading } = useGetFetchApi(id);

  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({
    content: "",
  });

  const handleClickDelete = async (e) => {
    e.preventDefault();
    const response = await fetchApi("DELETE", undefined, id);
    if (response.status === 204) {
      navigate("/crud-router/");
    }
  };

  const handleClickEdit = (e) => {
    e.preventDefault();
    setForm((prevForm) => ({ ...prevForm, content: data.content }));
    setEdit(true);
  };

  if (loading) {
    return <progress></progress>;
  }
  if (edit) {
    return <NewPost data={data} changeForm={setForm} changedForm={form} />;
  }
  return (
    <DetailedPost
      data={data}
      onClickEdit={handleClickEdit}
      onClickDelete={handleClickDelete}
    />
  );
};

export default ReviewPost;

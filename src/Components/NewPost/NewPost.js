import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchApi from "../../fetchApi";
import AuthorInfo from "../AuthorInfo/AuthorInfo";

const NewPost = (props) => {
  const { data, changeForm, changedForm } = props;

  const СhoosingFormValue = () => {
    if (changedForm) {
      return changedForm;
    }
    if (localStorage.message) {
      return JSON.parse(localStorage.message);
    }
    return {
      content: "",
    };
  };

  const [form, setForm] = useState(СhoosingFormValue);

  let navigate = useNavigate();

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    if (value) {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
      if (changedForm) {
        changeForm(form);
      }
    }
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.content) {
      const newData = {
        id: data.id || 0,
        content: form.content,
      };
      const response = await fetchApi("POST", newData);
      if (response.status === 204) {
        setForm({
          content: "",
        });
        localStorage.clear();
        navigate("/crud-router/");
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!changedForm) {
      localStorage.message = JSON.stringify(form);
      navigate("/crud-router/");
    }
    // TODO не работает откат к просмотру карточки
  };

  return (
    <div className="new-post">
      {data && <AuthorInfo data={data} />}
      <form id="post" onSubmit={handleSubmit}>
        <textarea
          name="content"
          cols="30"
          rows="10"
          type="text"
          placeholder="Напишите здесь"
          minLength="5"
          value={form.content}
          required
          onChange={handleChange}
        ></textarea>
        <button className="form-submit" type="submit">
          Опубликовать
        </button>
      </form>
      <button className="close" type="button" onClick={handleClick}>
        X
      </button>
    </div>
  );
};

export default NewPost;

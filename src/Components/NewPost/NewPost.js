import "./NewPost.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchApi from "../../fetchApi";
import AuthorInfo from "../AuthorInfo/AuthorInfo";

const NewPost = (props) => {
  const { data, changeForm, changedForm, changeEdit, fetchData, url } = props; // Пропсы передаются при изменении поста. При создании нового - пропсы пустые
  const checkProps = Object.keys(props).length; //Переменная для проверки наличия пропсов, т.е. для каких целей создается компонент

  const СhoosingFormValue = () => {
    if (checkProps) {
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
      if (checkProps) {
        changeForm(form);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.content) {
      const newData = {
        id: data ? data.id : 0,
        content: form.content,
      };
      const response = await fetchApi("POST", newData);
      if (response.status === 204) {
        setForm({
          content: "",
        });
        if (!checkProps) {
          localStorage.clear();
          navigate("/crud-router/");
        } else {
          fetchData(url);
          changeEdit(false);
        }
      }
    }
  };

  const handleClickClose = (e) => {
    e.preventDefault();
    if (!checkProps) {
      localStorage.message = JSON.stringify(form);
      navigate("/crud-router/");
    } else {
      changeEdit(false);
    }
  };

  return (
    <div className="new-post">
      <div className="title-container">
        <h3 className="title">
          {checkProps ? "Редактировать" : "Создать"} публикацию
        </h3>
      </div>
      {data && <AuthorInfo data={data} />}
      <form className="form" id="post" onSubmit={handleSubmit}>
        <textarea
          name="content"
          cols="60"
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
        <button className="form-close" type="button" onClick={handleClickClose}>
          🞫
        </button>
      </form>
    </div>
  );
};

export default NewPost;

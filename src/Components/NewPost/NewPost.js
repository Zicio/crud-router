import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchApi from "../../fetchApi";

const NewPost = () => {
  const [form, setForm] = useState({
    content: "",
  });

  let navigate = useNavigate();

  const handleChange = (name, value) => {
    if (value) {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
    console.log(form);
  };

  const onChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.content) {
      const data = {
        id: 0,
        content: form.content,
      };
      const response = await fetchApi("POST", data);
      if (response.status === 204) {
        setForm({
          content: "",
        });
        navigate("/crud-router/");
      }
    }
  };

  return (
    <div className="new-post">
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
          onChange={onChange}
        ></textarea>
        <button className="form-submit" type="submit">
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default NewPost;

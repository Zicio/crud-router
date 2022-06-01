import { useState } from "react";
import usePostFetchApi from "../../Hooks/usePostFetchApi";

const NewPost = () => {
  const [form, setForm] = useState({
    content: "",
  });
  const { data, loading, fetchData } = usePostFetchApi();

  const handleChange = (value) => {
    if (value) {
      setForm(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:7777/posts`;
    fetchData(url, form);
  };

  return (
    <div className="new-post">
      <form onSubmit={handleSubmit}>
        <textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="Напишите здесь"
          minlength="5"
          required
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default NewPost;

import { useState } from "react";
// import useFetchApi from "../../Hooks/useFetchApi";

const NewPost = () => {
  const [form, setForm] = useState({
    content: "",
  });
  // const { data, loading, fetchData } = useFetchApi("posts", "POST");

  const handleChange = (value) => {
    if (value) {
      setForm(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  TODO
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

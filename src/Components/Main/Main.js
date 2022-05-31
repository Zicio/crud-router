import useFetchApi from "../../Hooks/useFetchApi";
import Post from "../Post/Post";

const Main = () => {
  const { data, loading } = useFetchApi("posts");

  if (loading) {
    return <progress></progress>;
  }
  return (
    <>
      <div className="create-container">
        <button className="create" type="submit">
          Создать Пост
        </button>
      </div>
      <main className="posts-container">
        {data.map((el) => {
          return <Post key={el.id} data={el} />;
        })}
      </main>
    </>
  );
};

export default Main;

import "./App.scss";
import { Routes, Route, NavLink, useSearchParams } from "react-router-dom";
import Main from "../Components/Main/Main";
import NewPost from "../Components/NewPost/NewPost";
// import ReviewPost from "../Components/ReviewPost/ReviewPost";

function App() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="app">
      <Routes>
        <Route path="/crud-router/" element={<Main />} />
        <Route path="/crud-router/posts/new" element={<NewPost />} />
        {/* <Route path={`/posts/${id}`} element={<ReviewPost />} /> */}
      </Routes>
    </div>
  );
}

export default App;

import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "../Components/Main/Main";
import NewPost from "../Components/NewPost/NewPost";
import ReviewPost from "../Components/ReviewPost/ReviewPost";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/crud-router/" element={<Main />} />
        <Route path="/crud-router/posts/new" element={<NewPost />} />
        <Route path={`/crud-router/posts/:id`} element={<ReviewPost />} />
      </Routes>
    </div>
  );
}

export default App;

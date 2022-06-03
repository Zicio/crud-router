import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "../Components/Main/Main";
import NewPost from "../Components/NewPost/NewPost";
import ReviewPost from "../Components/ReviewPost/ReviewPost";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Главная страница со списком постов */}
        <Route path="/crud-router/" element={<Main />} />

        {/* Страница создания нового поста  + форма внесений изменений в пост*/}
        <Route path="/crud-router/posts/new" element={<NewPost />} />

        {/* Страница детального просмотра отдельного поста */}
        <Route path={`/crud-router/posts/:id`} element={<ReviewPost />} />
      </Routes>
    </div>
  );
}

export default App;

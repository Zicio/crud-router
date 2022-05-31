import { useState, useEffect } from "react";

const Main = () => {
  const [data] = useFetchApi(); // TODO

  return (
    <div className="create-container">
      <button className="create" type="submit">
        Создать Пост
      </button>
    </div>
  );
};

export default Main;

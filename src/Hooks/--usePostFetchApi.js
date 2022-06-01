import { useState } from "react";

const usePostFetchApi = () => {
  const url = `http://localhost:7777/posts`;
  const [loading, setLoading] = useState(false);

  const fetchData = async (form) => {
    setLoading(true);
    const response = await fetch(url, {
      method: "POST",
      body: { id: 0, content: form },
    });
    if (response.status === 204) {
      setLoading(false);
    }
  };

  return { loading, fetchData };
};

export default usePostFetchApi;

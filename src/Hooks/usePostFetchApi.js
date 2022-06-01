import { useState } from "react";

const usePostFetchApi = () => {
  const [status, setStatus] = useState({
    loading: false,
    data: [],
  });

  const fetchData = async (url) => {
    setStatus({ loading: true });
    const response = await fetch(url);
    const result = await response.json();
    setStatus({ loading: false, data: result });
  };

  return { ...status, fetchData };
};

export default usePostFetchApi;

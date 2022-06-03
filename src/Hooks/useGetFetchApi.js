import { useState, useEffect } from "react";

const useGetFetchApi = (id) => {
  const url = new URL("http://localhost:7777/posts");
  if (id) {
    url.searchParams.set("id", id);
  }
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

  useEffect(() => {
    fetchData(url);
  }, []);
  return { ...status, fetchData, url };
};

export default useGetFetchApi;

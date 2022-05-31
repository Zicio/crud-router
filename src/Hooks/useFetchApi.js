import { useState, useEffect } from "react";

const useFetchApi = (endpoint) => {
  const url = `http://localhost:7777/${endpoint}`;
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
  return { ...status, fetchData };
};

export default useFetchApi;

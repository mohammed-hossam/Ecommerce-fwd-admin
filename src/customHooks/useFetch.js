import React, { useEffect, useRef, useState } from 'react';
import axiosApiInstance from '../services/axiosInstance';

function useFetch(fetchData, setFetchData, url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(11111);
  //cache
  // const cache = useRef({});
  console.log(fetchData);

  useEffect(() => {
    console.log(33333);
    if (!url) return;

    async function fetchDataFromServer() {
      setLoading(true);

      // if (cache.current[url]) {
      //   const data = cache.current[url];
      //   setData(data);
      //   setLoading(false);
      // } else {
      try {
        const data = await axiosApiInstance.get(url);

        console.log(data);
        // cache.current[url] = data; // set response in cache;
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      // }
    }
    if (fetchData) {
      fetchDataFromServer();
      setFetchData(false);
    }
    console.log('the end');
  }, [fetchData, url, setFetchData]);

  return { data, loading, error };
}

export default useFetch;

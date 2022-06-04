import React, { useEffect, useRef, useState } from 'react';
import axiosApiInstance from '../services/axiosInstance';

function useFetch(url, method, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(11111);
  //cache
  const cache = useRef({});

  useEffect(() => {
    console.log(33333);
    if (!url) return;

    async function fetchDataFromServer() {
      setLoading(true);
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setLoading(false);
      } else {
        try {
          let data;
          switch (method) {
            case 'get':
              data = await axiosApiInstance.get(url);
              break;
            case 'post':
              data = await axiosApiInstance.post(url);
              break;
            case 'put':
              data = await axiosApiInstance.put(url);
              break;
            case 'delete':
              data = await axiosApiInstance.delete(url);
              break;

            default:
              console.log('axios method is wrong');
              break;
          }

          console.log(data);
          cache.current[url] = data; // set response in cache;
          setData(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
      }
    }

    fetchDataFromServer();
  }, [url, method]);

  return { data, loading, error };
}

export default useFetch;

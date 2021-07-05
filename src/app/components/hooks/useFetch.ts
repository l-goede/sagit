import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFetch = (url: string): any => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchData = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      };
      fetchData();
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [url]);

  return data;
};

export default useFetch;

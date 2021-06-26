import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFetch = (url: string): any => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchProductData = async () => {
        const res = await fetch(url);
        const json = await res.json();
        setProduct(json);
      };
      fetchProductData();
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [url]);

  return product;
};

export default useFetch;

import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useFetch = (url: string): any => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProductData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setProduct(json);
    };
    fetchProductData();
  }, []);

  return product;
};

export default useFetch;

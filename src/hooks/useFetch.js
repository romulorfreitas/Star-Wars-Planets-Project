import { useEffect, useState } from 'react';

export default function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [columnKeys, setColumnKeys] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://swapi.dev/api/planets';
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(({ results }) => {
        results.map((e) => delete e.residents);
        setData(results);
        setColumnKeys(Object.keys(results[0]));
        setLoading(false);
        // console.log(results);
      })
      .catch((err) => setError(err));
  }, []);

  return { data, loading, columnKeys, error };
}

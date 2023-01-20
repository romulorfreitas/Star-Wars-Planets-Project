import { useEffect, useState } from 'react';

export default function useFetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://swapi.dev/api/planets';
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(({ results }) => {
        results.map((e) => delete e.residentes);
        setData(results);
        setLoading(false);
        // console.log(results);
      })
      .catch((err) => setError(err));
  }, []);

  return { data, loading, error };
}

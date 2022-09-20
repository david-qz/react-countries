import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchCountries()
      .then((countries) => {
        setCountries(countries);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  return [countries, loading, error];
}

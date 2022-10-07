import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadCountries() {
      try {
        const countries = await fetchCountries();
        setCountries(countries);
        setLoading(false);
      } catch (error) {
        setError(true);
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    loadCountries();
  }, []);

  return [countries, loading, error];
}

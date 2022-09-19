import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries()
      .then((countries) => {
        setCountries(countries);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  return countries;
}

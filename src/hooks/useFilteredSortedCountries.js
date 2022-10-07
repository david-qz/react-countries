import { useState } from 'react';
import useCountries from './useCountries';

function filterCountries(countries, textFilter, continentFilter) {
  return countries.filter(country => {
    const { continent, name } = country;

    if (!(continentFilter === 'all' || continent === continentFilter))
      return false;

    if (!(name.match(new RegExp(`.*${textFilter}.*`, 'i'))))
      return false;

    return true;
  });
}

function sortCountriesByName(countries, sortIsAscending) {
  const sortSign = sortIsAscending ? -1 : 1;

  countries = [...countries];
  countries.sort((a, b) => {
    return a.name.localeCompare(b.name) * sortSign;
  });

  return countries;
}


export default function useFilteredSortedCountries() {
  const [countries, loading, error] = useCountries();

  const [textFilter, setTextFilter] = useState('');
  const [continentFilter, setContinentFilter] = useState('all');
  const [sortIsAscending, setSortIsAscending] = useState(false);

  const filteredCountries = filterCountries(countries, textFilter, continentFilter);
  const filteredAndSortedCountries = sortCountriesByName(filteredCountries, sortIsAscending);

  return {
    filteredAndSortedCountries, loading, error,
    textFilter, setTextFilter,
    continentFilter, setContinentFilter,
    sortIsAscending, setSortIsAscending
  };
}

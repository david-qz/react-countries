import './Main.css';
import FilterControls from '../FilterControls/FilterControls';
import CountryList from '../CountryList/CountryList';
import useCountries from '../../hooks/useCountries';
import { useState } from 'react';

export default function Main() {
  const countries = useCountries();

  const [continentFilter, setContinentFilter] = useState('all');
  const [textFilter, setTextFilter] = useState('');

  let filteredCountries = countries.filter(country => {
    if (continentFilter === 'all') return true;
    return country.continent === continentFilter;
  });

  filteredCountries = filteredCountries.filter(country => {
    return country.name.match(new RegExp(`.*${textFilter}.*`, 'i'));
  });

  return (
    <main>
      <FilterControls
        continentFilter={continentFilter} setContinentFilter={setContinentFilter}
        textFilter={textFilter} setTextFilter={setTextFilter}
      />
      <CountryList countries={filteredCountries} />
    </main>
  );
}

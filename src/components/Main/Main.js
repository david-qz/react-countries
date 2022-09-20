import './Main.css';
import FilterControls from '../FilterControls/FilterControls';
import CountryList from '../CountryList/CountryList';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import useCountries from '../../hooks/useCountries';
import { useState } from 'react';

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

export default function Main() {
  const [countries, loading] = useCountries();

  const [textFilter, setTextFilter] = useState('');
  const [continentFilter, setContinentFilter] = useState('all');

  const filteredCountries = filterCountries(countries, textFilter, continentFilter);
  filteredCountries.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  return (
    <main>
      <FilterControls
        textFilter={textFilter} setTextFilter={setTextFilter}
        continentFilter={continentFilter} setContinentFilter={setContinentFilter}
      />
      {
        loading
          ? <LoadingIcon />
          : <CountryList countries={filteredCountries} />
      }
    </main>
  );
}

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

function sortCountriesByName(countries, sortIsAscending) {
  const sortSign = sortIsAscending ? 1 : -1;

  countries = [...countries];
  countries.sort((a, b) => {
    if (a.name === b.name) return 0;
    return a.name < b.name ? sortSign : -sortSign;
  });

  return countries;
}

export default function Main() {
  const [countries, loading, error] = useCountries();

  const [textFilter, setTextFilter] = useState('');
  const [continentFilter, setContinentFilter] = useState('all');
  const [sortIsAscending, setSortIsAscending] = useState(false);

  const filteredCountries = filterCountries(countries, textFilter, continentFilter);
  const filteredAndSortedCountries = sortCountriesByName(filteredCountries, sortIsAscending);

  return (
    <main>
      <FilterControls
        textFilter={textFilter} setTextFilter={setTextFilter}
        continentFilter={continentFilter} setContinentFilter={setContinentFilter}
        sortIsAscending={sortIsAscending} setSortIsAscending={setSortIsAscending}
      />
      {
        loading
          ? <LoadingIcon error={error}/>
          : <CountryList countries={filteredAndSortedCountries} />
      }
    </main>
  );
}

import './Main.css';
import FilterControls from '../FilterControls/FilterControls';
import CountryList from '../CountryList/CountryList';
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import useFilteredSortedCountries from '../../hooks/useFilteredSortedCountries';

export default function Main() {
  const {
    filteredAndSortedCountries, loading, error,
    textFilter, setTextFilter,
    continentFilter, setContinentFilter,
    sortIsAscending, setSortIsAscending
  } = useFilteredSortedCountries();

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

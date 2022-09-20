import './FilterControls.css';

export default function FilterControls({
  textFilter, setTextFilter,
  continentFilter, setContinentFilter,
  sortIsAscending, setSortIsAscending
}) {
  return (
    <div className='FilterControls'>
      <input
        onChange={(e) => setTextFilter(e.target.value)}
        value={textFilter}
        placeholder="country name"
      ></input>
      <select
        onChange={(e) => setContinentFilter(e.target.value)}
        value={continentFilter}
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
      </select>
      <input
        id="sort-direction"
        type="checkbox"
        onChange={(e) => setSortIsAscending(e.target.checked)}
        checked={sortIsAscending}
      ></input>
      <label htmlFor="sort-direction"></label>
    </div>
  );
}

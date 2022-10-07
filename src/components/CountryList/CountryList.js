import './CountryList.css';

export default function CountryList({ countries }) {
  return (
    <div className='CountryList'>
      {
        countries.map((country) => {
          const countryCode = country.iso2.toLowerCase();
          return (
            <div className='country' key={country.id}>
              <h3>{country.name}</h3>
              <img
                src={`https://flagcdn.com/64x48/${countryCode}.png`}
                srcSet={`https://flagcdn.com/128x96/${countryCode}.png 2x, https://flagcdn.com/192x144/${countryCode}.png 3x`}
                width="64"
                height="48"
                alt={country.name} />
            </div>
          );
        })
      }
    </div>
  );
}

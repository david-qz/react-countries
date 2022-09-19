import { fetchCountries } from './countries';

describe('countries.js', () => {
  it('fetchCountries() should return a list of countries', async () => {
    const countries = await fetchCountries();
    expect(countries).toBeInstanceOf(Array);
    expect(countries.length).toEqual(249);
    expect(countries[0]).toEqual(expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      iso2: expect.any(String),
      iso3: expect.any(String),
    }));
  });
});

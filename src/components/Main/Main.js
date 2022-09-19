import './Main.css';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import CountryList from '../CountryList/CountryList';
import useCountries from '../../hooks/useCountries';

export default function Main() {
  const countries = useCountries();

  return (
    <div className='Main'>
      <Header />
      <CountryList countries={countries} />
      <Footer />
    </div>
  );
}

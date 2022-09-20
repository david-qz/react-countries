import './LoadingIcon.css';
import loadingBg from '../../assets/loading-bg.png';
import loadingFg from '../../assets/loading-fg.png';
import loadingError from '../../assets/loading-error.png';

export default function LoadingIcon({ error }) {
  return <div className='LoadingIcon'>
    <img src={loadingBg} />
    <img
      src={error ? loadingError : loadingFg}
      className={error ? '' : 'rotating'}
    />
  </div>;
}

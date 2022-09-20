import './LoadingIcon.css';
import loadingBg from '../../assets/loading-bg.png';
import loadingFg from '../../assets/loading-fg.png';

export default function LoadingIcon() {
  return <div className='LoadingIcon'>
    <img src={loadingBg} />
    <img src={loadingFg} />
  </div>;
}
